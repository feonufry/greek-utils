
import "./aliases";
import "./vocabulary";
import "./articles";
import "./verbs";
import "./noun-like";
import "./particles";

import { Token } from "../scanning";
import { CanonicalTransformationAware, GrammarAnnotation, GrammarType, VocabularyEntry } from "./index";
import { search } from "./registry";

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
        const transformed = tokenTransliterated.substr(0, tokenLength - suffixLength)
            + transformation.replacement;
        result.push(transformed);
    }
    return result;
}
