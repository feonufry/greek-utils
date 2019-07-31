
import "./aliases";
import "./vocabulary";
import "./articles";
import "./verbs";
import "./noun-like";
import "./particles";

import { Token } from "../scanning";
import { CanonicalTransformationAware, GrammarAnnotation, GrammarType, VocabularyEntry } from "./index";
import { search } from "./registry";
import { untransliterate } from "../transliteration";

export interface AnnotatedToken {
    token: Token;
    annotations: GrammarAnnotation[];
    vocabulary: VocabularyEntry[];
    aliases: string[];
}

export function annotate(token: Token): AnnotatedToken {
    const searchResult = search(token.transliterated);
    const annotations: GrammarAnnotation[] = [];

    let vocabularyResult = searchResult.vocabulary;
    const canonicals: string[] = [];
    for (const annotation of searchResult.annotations) {
        let effectiveAnnotation = annotation;
        if (annotation.type === GrammarType.VERB
                || annotation.type === GrammarType.NOUN) {

            effectiveAnnotation = {
                ...annotation,
                canonical: transformToCanonical(token.transliterated, annotation),
            };
        }
        annotations.push(effectiveAnnotation);
        for (const canonical of effectiveAnnotation.canonical) {
            canonicals.push(canonical);
        }
    }
    const found = new Map<string, object>();
    for (const foundVocabulary of vocabularyResult) {
        found.set(foundVocabulary.word, {});
    }
    for (const canonical of canonicals) {
        if (found.has(canonical)) {
            continue;
        }
        const vocabularyForCanonical = search(canonical).vocabulary;
        for (const vocabulary of vocabularyForCanonical) {
            vocabularyResult.push(vocabulary);
        }
        found.set(canonical, {});
    }

    return {
        token,
        annotations,
        vocabulary: vocabularyResult,
        aliases: searchResult.aliases,
    };
}

function transformToCanonical(tokenTransliterated: string, annotation: CanonicalTransformationAware): string[] {
    const result: string[] = [];
    const tokenLength = tokenTransliterated.length;
    for (const transformation of annotation.canonicalTransformations) {
        if (!tokenTransliterated.endsWith(transformation.original)) {
            continue;
        }
        const suffixLength = transformation.original.length;
        let transformed = tokenTransliterated.substr(0, tokenLength - suffixLength)
            + transformation.replacement;
        if (annotation.incremented != null && annotation.incremented) {
            const decremented = removeIncrement(transformed);
            for (const decrement of decremented) {
                result.push(decrement);
            }
        } else {
            result.push(transformed);
        }
    }
    return result;
}

function removeIncrement(word: string) {
    let shortPrefix = "";
    let fullPrefix = "";
    let base = word;

    if (word.startsWith("ap")) {
        shortPrefix = "ap";
        fullPrefix = "apo";
        base = base.substr(2);
    } else if (word.startsWith("di")) {
        shortPrefix = "di";
        fullPrefix = "dia";
        base = base.substr(2);
    } else if (word.startsWith("eic")) {
        shortPrefix = "eic";
        fullPrefix = "eic";
        base = base.substr(3);
    } else if (word.startsWith("ex")) {
        shortPrefix = "ex";
        fullPrefix = "ek"; // ??
        base = base.substr(2);
    } else if (word.startsWith("ev")) {
        shortPrefix = "ev";
        fullPrefix = "ev";
        base = base.substr(2);
    } else if (word.startsWith("kat")) {
        shortPrefix = "kat";
        fullPrefix = "kata";
        base = base.substr(3);
    } else if (word.startsWith("met")) {
        shortPrefix = "met";
        fullPrefix = "meta";
        base = base.substr(3);
    } else if (word.startsWith("par")) {
        shortPrefix = "par";
        fullPrefix = "para";
        base = base.substr(3);
    } else if (word.startsWith("peri")) {
        shortPrefix = "peri";
        fullPrefix = "peri";
        base = base.substr(4);
    } else if (word.startsWith("pro")) {
        shortPrefix = "pro";
        fullPrefix = "pro";
        base = base.substr(3);
    } else if (word.startsWith("proc")) {
        shortPrefix = "proc";
        fullPrefix = "proc";
        base = base.substr(4);
    } else if (word.startsWith("suv")) {
        shortPrefix = "suv";
        fullPrefix = "suv";
        base = base.substr(3);
    } else if (word.startsWith("up")) {
        shortPrefix = "up";
        fullPrefix = "upo";
        base = base.substr(2);
    }

    if (base.startsWith("e")) {
        return [fullPrefix + base.substr(1)];
    }
    if (base.startsWith("h/")) {
        base = base.substr(2);
        return [
            shortPrefix + "ai" + base,
            shortPrefix + "ei" + base,
        ];
    }
    if (base.startsWith("h")) {
        base = base.substr(1);
        return [
            shortPrefix + "a" + base,
            shortPrefix + "e" + base,
        ];
    }
    if (base.startsWith("w/")) {
        return [shortPrefix + "oi" + base.substr(2)];
    }
    if (base.startsWith("w")) {
        return [shortPrefix + "o" + base.substr(1)];
    }
    if (base.startsWith("u") || base.startsWith("i")) {
        return [shortPrefix + base];
    }

    console.warn(`Couldn't revert an increment for verb ${untransliterate(word)}.`);
    return [word];
}
