import { GrammarAnnotation, GrammarType, SearchResult, VocabularyEntry, VocabularyEntryDescription } from "./index";
import { SuffixMatchingTree } from "../utils/suffix-matching-tree";

const index = new SuffixMatchingTree<GrammarAnnotation>();
const vocabularyIndex = new Map<string, VocabularyEntry[]>();

export function register(suffixTransliterated: string, annotation: GrammarAnnotation) {
    index.add(suffixTransliterated, annotation);
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
    const vocabulary = searchVocabulary(inputTransliterated);
    const skipAnnotations = vocabulary.some(e => e.skipAnnotations);
    if (skipAnnotations) {
        return {
            annotations: [],
            vocabulary,
        }
    }

    const search = inputTransliterated.startsWith("$")
        ? inputTransliterated
        : "$" + inputTransliterated;
    const annotations = index.match(search);
    return {
        annotations,
        vocabulary,
    };
}

export function searchVocabulary(inputTransliterated: string): VocabularyEntry[] {
    return  vocabularyIndex.get(inputTransliterated) || [];
}
