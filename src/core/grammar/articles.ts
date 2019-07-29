import { register } from "./registry";
import { Case, Singularity, Gender, GrammarType } from "./index";

register("$o", {
    type: GrammarType.ARTICLE,
    gender: [Gender.MASCULINE],
    singularity: Singularity.SINGULAR,
    case: [Case.NOMINATIVE, Case.VOCATIVE],
    canonical: ["o"],
    related: [],
});
register("$tou", {
    type: GrammarType.ARTICLE,
    gender: [Gender.MASCULINE, Gender.NEUTER],
    singularity: Singularity.SINGULAR,
    case: [Case.GENITIVE],
    canonical: ["o", "to"],
    related: [],
});
register("$tw/", {
    type: GrammarType.ARTICLE,
    gender: [Gender.MASCULINE, Gender.NEUTER],
    singularity: Singularity.SINGULAR,
    case: [Case.DATIVE],
    canonical: ["o", "to"],
    related: [],
});
register("$tov", {
    type: GrammarType.ARTICLE,
    gender: [Gender.MASCULINE, Gender.NEUTER],
    singularity: Singularity.SINGULAR,
    case: [Case.DATIVE],
    canonical: ["o"],
    related: [],
});
register("$h", {
    type: GrammarType.ARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.SINGULAR,
    case: [Case.NOMINATIVE, Case.VOCATIVE],
    canonical: ["h"],
    related: [],
});
register("$thc", {
    type: GrammarType.ARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.SINGULAR,
    case: [Case.NOMINATIVE, Case.VOCATIVE],
    canonical: ["h"],
    related: [],
});
register("$th/", {
    type: GrammarType.ARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.SINGULAR,
    case: [Case.DATIVE],
    canonical: ["h"],
    related: [],
});
register("$thv", {
    type: GrammarType.ARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.SINGULAR,
    case: [Case.ACCUSATIVE],
    canonical: ["h"],
    related: [],
});
register("$to", {
    type: GrammarType.ARTICLE,
    gender: [Gender.NEUTER],
    singularity: Singularity.SINGULAR,
    case: [Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE],
    canonical: ["to"],
    related: [],
});
register("$oi", {
    type: GrammarType.ARTICLE,
    gender: [Gender.MASCULINE],
    singularity: Singularity.PLURAL,
    case: [Case.NOMINATIVE, Case.VOCATIVE],
    canonical: ["oi"],
    related: ["o"],
});
register("$twv", {
    type: GrammarType.ARTICLE,
    gender: [Gender.MASCULINE, Gender.FEMININE, Gender.NEUTER],
    singularity: Singularity.PLURAL,
    case: [Case.GENITIVE],
    canonical: ["oi", "ai", "ta"],
    related: ["o", "h", "to"],
});
register("$toic", {
    type: GrammarType.ARTICLE,
    gender: [Gender.MASCULINE, Gender.NEUTER],
    singularity: Singularity.PLURAL,
    case: [Case.DATIVE],
    canonical: ["oi", "ta"],
    related: ["o", "to"],
});
register("$touc", {
    type: GrammarType.ARTICLE,
    gender: [Gender.MASCULINE],
    singularity: Singularity.PLURAL,
    case: [Case.ACCUSATIVE],
    canonical: ["oi"],
    related: ["o"],
});
register("$ai", {
    type: GrammarType.ARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.PLURAL,
    case: [Case.NOMINATIVE, Case.VOCATIVE],
    canonical: ["ai"],
    related: ["h"],
});
register("$taic", {
    type: GrammarType.ARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.PLURAL,
    case: [Case.DATIVE],
    canonical: ["ai"],
    related: ["h"],
});
register("$tac", {
    type: GrammarType.ARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.PLURAL,
    case: [Case.ACCUSATIVE],
    canonical: ["ai"],
    related: ["h"],
});
register("$ta", {
    type: GrammarType.ARTICLE,
    gender: [Gender.NEUTER],
    singularity: Singularity.PLURAL,
    case: [Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE],
    canonical: ["ta"],
    related: ["to"],
});
