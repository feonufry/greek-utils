import "./aliases";
import "./vocabulary";

import "./articles";
import "./particles";
import "./verbs-to-be";
import "./verbs";
import "./participles";
import "./noun-like";

import {Token} from "../scanning";
import {CanonicalTransformationAware, GrammarAnnotation, GrammarType, VocabularyEntry} from "./index";
import {search} from "./registry";
import {untransliterate} from "../transliteration";

interface NumberMappings {
    [key: string]: number;
}

const NumberMapping: NumberMappings = {
    "a": 1,
    "b": 2,
    "g": 3,
    "d": 4,
    "e": 5,
    "c": 6,
    "z": 7,
    "h": 8,
    "q": 9,
    "i": 10,
    "k": 20,
    "l": 30,
    "m": 40,
    "v": 50,
    "x": 60,
    "o": 70,
    "p": 80,
    "ч": 90,
    "r": 100,
    "s": 200,
    "t": 300,
    "u": 400,
    "ф": 500,
    "х": 600,
    "j": 700,
    "w": 800,
};

export interface AnnotatedToken {
    token: Token;
    annotations: GrammarAnnotation[];
    vocabulary: VocabularyEntry[];
    aliases: string[];
    number: number | null;
}

export function annotate(token: Token): AnnotatedToken {
    const searchResult = search(token.transliteratedBasic);
    const annotations: GrammarAnnotation[] = [];

    let vocabularyResult = searchResult.vocabulary;
    const canonicals: string[] = [];
    const grammarTypes = new Set<GrammarType>();

    sortAnnotations(searchResult.annotations);
    for (const annotation of searchResult.annotations) {
        let effectiveAnnotation = annotation;
        if (annotation.type !== GrammarType.ARTICLE && grammarTypes.has(GrammarType.ARTICLE)
                || annotation.type !== GrammarType.PARTICLE && grammarTypes.has(GrammarType.PARTICLE)) {
            continue;
        }

        if (annotation.type === GrammarType.VERB
                || annotation.type === GrammarType.PARTICIPLE
                || annotation.type === GrammarType.NOUN) {

            effectiveAnnotation = {
                ...annotation,
                canonical: transformToCanonical(token.transliteratedBasic, annotation),
            };
        }
        annotations.push(effectiveAnnotation);
        for (const canonical of effectiveAnnotation.canonical) {
            canonicals.push(canonical);
        }
        grammarTypes.add(effectiveAnnotation.type);
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
        number: getNumber(token.transliteratedBasic),
    };
}

function getNumber(token: string): number|null {
    if (!token.endsWith("#")) {
        return null;
    }
    let number = 0;
    for (let index = 0; index < token.length - 1; ++index) {
        const map = NumberMapping[token[index]];
        if (map != null) {
            number += map;
        }
    }
    return number;
}

function sortAnnotations(annotations: GrammarAnnotation[]) {
    annotations.sort((left, right) => left.type < right.type
            ? -1
            : (left.type === right.type ? 0 : 1));
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
