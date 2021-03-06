import { register } from "./registry";
import { CanonicalTransformation, Case, Gender, GrammarType, Singularity } from "./index";

// 1st, Singular

register("a", {
    type: GrammarType.NOUN,
    gender: [Gender.FEMININE],
    singularity: Singularity.SINGULAR,
    case: [Case.NOMINATIVE, Case.VOCATIVE],
    canonical: [],
    canonicalTransformations: []
});

register("ac", {
    type: GrammarType.NOUN,
    gender: [Gender.FEMININE],
    singularity: Singularity.SINGULAR,
    case: [Case.GENITIVE],
    canonical: [],
    canonicalTransformations: transform("ac", "a")
});

register("a/", {
    type: GrammarType.NOUN,
    gender: [Gender.FEMININE, Gender.MASCULINE],
    singularity: Singularity.SINGULAR,
    case: [Case.DATIVE],
    canonical: [],
    canonicalTransformations: transform("a/", "a", "ac")
});

register("av", {
    type: GrammarType.NOUN,
    gender: [Gender.FEMININE, Gender.MASCULINE],
    singularity: Singularity.SINGULAR,
    case: [Case.ACCUSATIVE],
    canonical: [],
    canonicalTransformations: transform("av", "a", "ac")
});

register("h", {
    type: GrammarType.NOUN,
    gender: [Gender.FEMININE],
    singularity: Singularity.SINGULAR,
    case: [Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE],
    canonical: [],
    canonicalTransformations: []
});

register("hc", {
    type: GrammarType.NOUN,
    gender: [Gender.FEMININE],
    singularity: Singularity.SINGULAR,
    case: [Case.GENITIVE],
    canonical: [],
    canonicalTransformations: transform("hc", "a", "h")
});

register("h/", {
    type: GrammarType.NOUN,
    gender: [Gender.FEMININE, Gender.MASCULINE],
    singularity: Singularity.SINGULAR,
    case: [Case.DATIVE],
    canonical: [],
    canonicalTransformations: transform("h/", "h", "hc")
});

register("hv", {
    type: GrammarType.NOUN,
    gender: [Gender.FEMININE, Gender.MASCULINE],
    singularity: Singularity.SINGULAR,
    case: [Case.ACCUSATIVE],
    canonical: [],
    canonicalTransformations: transform("hv", "h", "hc")
});

register("ac", {
    type: GrammarType.NOUN,
    gender: [Gender.MASCULINE],
    singularity: Singularity.SINGULAR,
    case: [Case.NOMINATIVE],
    canonical: [],
    canonicalTransformations: []
});

register("hc", {
    type: GrammarType.NOUN,
    gender: [Gender.MASCULINE],
    singularity: Singularity.SINGULAR,
    case: [Case.NOMINATIVE],
    canonical: [],
    canonicalTransformations: []
});

register("ou", {
    type: GrammarType.NOUN,
    gender: [Gender.MASCULINE],
    singularity: Singularity.SINGULAR,
    case: [Case.GENITIVE],
    canonical: [],
    canonicalTransformations: transform("ou", "ac", "hc", "oc")
});

register("a", {
    type: GrammarType.NOUN,
    gender: [Gender.MASCULINE],
    singularity: Singularity.SINGULAR,
    case: [Case.VOCATIVE],
    canonical: [],
    canonicalTransformations: transform("a", "ac", "hc")
});

// 1st, Plural

register("ai", {
    type: GrammarType.NOUN,
    gender: [Gender.FEMININE, Gender.MASCULINE],
    singularity: Singularity.PLURAL,
    case: [Case.NOMINATIVE, Case.VOCATIVE],
    canonical: [],
    canonicalTransformations: transform("ai", "a", "h", "ac", "hc")
});

register("wv", {
    type: GrammarType.NOUN,
    gender: [Gender.FEMININE, Gender.MASCULINE],
    singularity: Singularity.PLURAL,
    case: [Case.GENITIVE],
    canonical: [],
    canonicalTransformations: transform("wv", "a", "h", "ac", "hc")
});

register("aic", {
    type: GrammarType.NOUN,
    gender: [Gender.FEMININE, Gender.MASCULINE],
    singularity: Singularity.PLURAL,
    case: [Case.DATIVE],
    canonical: [],
    canonicalTransformations: transform("aic", "a", "h", "ac", "hc")
});

register("ac", {
    type: GrammarType.NOUN,
    gender: [Gender.FEMININE, Gender.MASCULINE],
    singularity: Singularity.PLURAL,
    case: [Case.ACCUSATIVE],
    canonical: [],
    canonicalTransformations: transform("ac", "a", "h", "ac", "hc")
});

// 2nd, M., Singular

register("oc", {
    type: GrammarType.NOUN,
    gender: [Gender.MASCULINE],
    singularity: Singularity.SINGULAR,
    case: [Case.NOMINATIVE],
    canonical: [],
    canonicalTransformations: []
});

// M. Gen. `-ou` -> see above

register("w/", {
    type: GrammarType.NOUN,
    gender: [Gender.MASCULINE],
    singularity: Singularity.SINGULAR,
    case: [Case.DATIVE],
    canonical: [],
    canonicalTransformations: transform("w/", "oc")
});

register("ov", {
    type: GrammarType.NOUN,
    gender: [Gender.MASCULINE],
    singularity: Singularity.SINGULAR,
    case: [Case.ACCUSATIVE],
    canonical: [],
    canonicalTransformations: transform("ov", "oc")
});

register("e", {
    type: GrammarType.NOUN,
    gender: [Gender.MASCULINE],
    singularity: Singularity.SINGULAR,
    case: [Case.VOCATIVE],
    canonical: [],
    canonicalTransformations: transform("e", "oc")
});

// 2nd, M., Plural

register("oi", {
    type: GrammarType.NOUN,
    gender: [Gender.MASCULINE],
    singularity: Singularity.PLURAL,
    case: [Case.NOMINATIVE, Case.VOCATIVE],
    canonical: [],
    canonicalTransformations: transform("oi", "oc")
});

register("wv", {
    type: GrammarType.NOUN,
    gender: [Gender.MASCULINE],
    singularity: Singularity.PLURAL,
    case: [Case.GENITIVE],
    canonical: [],
    canonicalTransformations: transform("wv", "oc")
});

register("oic", {
    type: GrammarType.NOUN,
    gender: [Gender.MASCULINE],
    singularity: Singularity.PLURAL,
    case: [Case.DATIVE],
    canonical: [],
    canonicalTransformations: transform("oic", "oc")
});

register("ouc", {
    type: GrammarType.NOUN,
    gender: [Gender.MASCULINE],
    singularity: Singularity.PLURAL,
    case: [Case.ACCUSATIVE],
    canonical: [],
    canonicalTransformations: transform("ouc", "oc")
});

// 2nd, N., Singular

register("ov", {
    type: GrammarType.NOUN,
    gender: [Gender.NEUTER],
    singularity: Singularity.SINGULAR,
    case: [Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE],
    canonical: [],
    canonicalTransformations: []
});

register("ou", {
    type: GrammarType.NOUN,
    gender: [Gender.NEUTER],
    singularity: Singularity.SINGULAR,
    case: [Case.GENITIVE],
    canonical: [],
    canonicalTransformations: transform("ou", "ov")
});

register("w/", {
    type: GrammarType.NOUN,
    gender: [Gender.NEUTER],
    singularity: Singularity.SINGULAR,
    case: [Case.DATIVE],
    canonical: [],
    canonicalTransformations: transform("w/", "ov")
});

// 2nd, N., Plural

register("a", {
    type: GrammarType.NOUN,
    gender: [Gender.NEUTER],
    singularity: Singularity.PLURAL,
    case: [Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE],
    canonical: [],
    canonicalTransformations: transform("a", "ov")
});

register("wv", {
    type: GrammarType.NOUN,
    gender: [Gender.NEUTER],
    singularity: Singularity.PLURAL,
    case: [Case.GENITIVE],
    canonical: [],
    canonicalTransformations: transform("wv", "ov")
});

register("oic", {
    type: GrammarType.NOUN,
    gender: [Gender.NEUTER],
    singularity: Singularity.PLURAL,
    case: [Case.DATIVE],
    canonical: [],
    canonicalTransformations: transform("oic", "ov")
});


register("hc", {
    type: GrammarType.NOUN,
    gender: [Gender.FEMININE],
    singularity: Singularity.SINGULAR,
    case: [Case.GENITIVE],
    canonical: [],
    canonicalTransformations: transform("hc", "h")
});
register("ewc", {
    type: GrammarType.NOUN,
    gender: [Gender.FEMININE],
    singularity: Singularity.SINGULAR,
    case: [Case.GENITIVE],
    canonical: [],
    canonicalTransformations: transform("ewc", "h")
});

register("eic", {
    type: GrammarType.NOUN,
    gender: [Gender.FEMININE],
    singularity: Singularity.PLURAL,
    case: [Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE],
    canonical: [],
    canonicalTransformations: transform("eic", "h")
});

register("ewv", {
    type: GrammarType.NOUN,
    gender: [Gender.FEMININE],
    singularity: Singularity.PLURAL,
    case: [Case.GENITIVE],
    canonical: [],
    canonicalTransformations: transform("ewv", "h")
});

// 3rd, Singular
noun(
    ["oc"],
    [Gender.MASCULINE, Gender.MASCULINE, Gender.NEUTER],
    Singularity.SINGULAR,
    [Case.GENITIVE],
    transform("oc", "-"));
noun(
    ["i"],
    [Gender.MASCULINE, Gender.MASCULINE, Gender.NEUTER],
    Singularity.SINGULAR,
    [Case.DATIVE],
    transform("i", "oc-"));
noun(
    ["a", "v"],
    [Gender.MASCULINE, Gender.MASCULINE, Gender.NEUTER],
    Singularity.SINGULAR,
    [Case.ACCUSATIVE],
    [
        ...transform("a", "oc-"),
        ...transform("v", "oc-")
    ]);
noun(
    ["ma"],
    [Gender.NEUTER], Singularity.SINGULAR, [Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE],
    []);
noun(
    ["matoc"],
    [Gender.NEUTER],
    Singularity.SINGULAR,
    [Case.GENITIVE],
    transform("matoc", "ma"));
noun(
    ["mati"],
    [Gender.NEUTER],
    Singularity.SINGULAR,
    [Case.DATIVE],
    transform("mati", "ma"));

// 3rd, Plural
noun(
    ["ec"],
    [Gender.MASCULINE, Gender.MASCULINE, Gender.NEUTER],
    Singularity.PLURAL,
    [Case.GENITIVE],
    transform("ec", "oc-"));
noun(
    ["si", "siv", "xi", "xiv", "ji", "jiv", "ousi", "ousiv"],
    [Gender.MASCULINE, Gender.MASCULINE, Gender.NEUTER],
    Singularity.PLURAL,
    [Case.DATIVE],
    [
        ...transform("si", "oc-", "toc-", "doc-", "qoc-", "vtoc-"),
        ...transform("siv", "oc-", "toc-", "doc-", "qoc-", "vtoc-"),
        ...transform("xi", "koc-", "goc-", "хoc-"),
        ...transform("xiv", "koc-", "goc-", "хoc-"),
        ...transform("ji", "poc-", "boc-", "фoc-"),
        ...transform("jiv", "poc-", "boc-", "фoc-"),
        ...transform("ousi", "ovtoc-"),
        ...transform("ousiv", "ovtoc-"),
    ]);
noun(
    ["ac"],
    [Gender.MASCULINE, Gender.MASCULINE, Gender.NEUTER],
    Singularity.PLURAL,
    [Case.ACCUSATIVE],
    transform("ac", "oc-"));

noun(
    ["mata"],
    [Gender.NEUTER], Singularity.PLURAL, [Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE],
    transform("mata", "ma"));
noun(
    ["matwv"],
    [Gender.NEUTER], Singularity.PLURAL, [Case.GENITIVE],
    transform("matwv", "ma"));
noun(
    ["masi", "masiv"],
    [Gender.NEUTER], Singularity.PLURAL, [Case.DATIVE],
    [
        ...transform("masi", "ma"),
        ...transform("masiv", "ma"),
    ]);

// Utils

function noun(suffixes: string[], genders: Gender[], singularity: Singularity, cases: Case[], transformations: CanonicalTransformation[]) {
    for (const suffix of suffixes) {
        register(suffix, {
            type: GrammarType.NOUN,
            gender: genders,
            singularity,
            case: cases,
            canonical: [],
            canonicalTransformations: transformations
        });
    }
}

function transform(original: string, ...replacements: string[]): CanonicalTransformation[] {
    return replacements.map(replacement => ({ original, replacement }));
}
