import { GrammarAnnotation, GrammarType, SearchResult, VocabularyEntry, VocabularyEntryDescription } from "./index";
import { SuffixMatchingTree } from "../utils/suffix-matching-tree";

const index = new SuffixMatchingTree<GrammarAnnotation>();
const vocabularyIndex = new Map<string, VocabularyEntry[]>();
const aliasIndex = new Map<string, string[]>();

export function register(suffixTransliterated: string, annotation: GrammarAnnotation) {
    index.add(suffixTransliterated, annotation);
}

export function alias(wordsTransliterated: string[], aliases: string[]) {
    for (const word of wordsTransliterated) {
        let entries = aliasIndex.get(word);
        if (entries != null) {
            for (const alias of aliases) {
                entries.push(alias);
            }
        } else {
            aliasIndex.set(word, aliases);
        }
    }
}

export function vocabulary(wordTransliterated: string, type: GrammarType, description: VocabularyEntryDescription, skipAnnotations = true) {
    let entries = vocabularyIndex.get(wordTransliterated);
    if (entries != null) {
        entries.push({
            skipAnnotations,
            description,
            grammarType: type,
            word: wordTransliterated,
        });
    } else {
        vocabularyIndex.set(wordTransliterated, [{
            skipAnnotations,
            description,
            grammarType: type,
            word: wordTransliterated,
        }]);
    }
}

export function search(inputTransliterated: string): SearchResult {
    const aliases = searchAliases(inputTransliterated);
    const words = [inputTransliterated, ...aliases];
    const searchResult: SearchResult = {
        annotations: [],
        vocabulary: [],
        aliases,
    };
    for (const word of words) {
        const singleResult = searchSingle(word);
        searchResult.annotations = [...searchResult.annotations, ...singleResult.annotations];
        searchResult.vocabulary = [...searchResult.vocabulary, ...singleResult.vocabulary];
    }
    return searchResult;
}

function searchSingle(inputTransliterated: string): SearchResult {
    const vocabulary = searchVocabulary(inputTransliterated);
    const skipAnnotations = vocabulary.some(e => e.skipAnnotations);
    if (skipAnnotations) {
        return {
            annotations: [],
            aliases: [],
            vocabulary,
        }
    }

    const search = inputTransliterated.startsWith("$")
        ? inputTransliterated
        : "$" + inputTransliterated;
    const annotations = index.match(search);
    return {
        aliases: [],
        annotations,
        vocabulary,
    };
}

export function searchVocabulary(inputTransliterated: string): VocabularyEntry[] {
    return  vocabularyIndex.get(inputTransliterated) || [];
}

export function searchAliases(inputTransliterated: string): string[] {
    return  aliasIndex.get(inputTransliterated) || [];
}
