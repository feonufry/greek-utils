import { GrammarAnnotation } from "./index";
import { SuffixMatchingTree } from "../utils/suffix-matching-tree";

const index = new SuffixMatchingTree<GrammarAnnotation>();

export function register(suffixTransliterated: string, annotation: GrammarAnnotation) {
    index.add(suffixTransliterated, annotation);
}

export function search(inputTransliterated: string): GrammarAnnotation[] {
    const search = inputTransliterated.startsWith("$")
        ? inputTransliterated
        : "$" + inputTransliterated;
    return index.match(search);
}
