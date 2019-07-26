import "./articles";
import "./verbs";
import "./noun-like";

import { Token } from "../scanning";
import { CanonicalTransformationAware, GrammarAnnotation, GrammarType } from "./index";
import { search } from "./registry";

export interface AnnotatedToken {
    token: Token;
    annotations: GrammarAnnotation[];
}

export function annotate(token: Token): AnnotatedToken {
    const annotationsFound = search(token.transliterated);
    const annotations: GrammarAnnotation[] = [];

    for (const annotation of annotationsFound) {
        if (annotation.type === GrammarType.VERB
                || annotation.type === GrammarType.NOUN) {

            const transformedAnnotation: GrammarAnnotation = {
                ...annotation,
                canonical: transformToCanonical(token.transliterated, annotation),
            };
            annotations.push(transformedAnnotation);
        } else {
            annotations.push(annotation);
        }
    }

    return { token, annotations, };
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
