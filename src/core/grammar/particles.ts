import { register } from "./registry";
import { Case, Gender, GrammarType, Person, Singularity } from "./index";

register("$ego", {
    type: GrammarType.PARTICLE,
    gender: [],
    singularity: Singularity.SINGULAR,
    case: [Case.NOMINATIVE, Case.VOCATIVE],
    person: Person.FIRST,
    canonical: ["ego"],
});

register("$emou", {
    type: GrammarType.PARTICLE,
    gender: [],
    singularity: Singularity.SINGULAR,
    case: [Case.GENITIVE],
    person: Person.FIRST,
    canonical: ["ego"],
});

register("$mou", {
    type: GrammarType.PARTICLE,
    gender: [],
    singularity: Singularity.SINGULAR,
    case: [Case.GENITIVE],
    person: Person.FIRST,
    canonical: ["ego"],
});

register("$emoi", {
    type: GrammarType.PARTICLE,
    gender: [],
    singularity: Singularity.SINGULAR,
    case: [Case.DATIVE],
    person: Person.FIRST,
    canonical: ["ego"],
});

register("$moi", {
    type: GrammarType.PARTICLE,
    gender: [],
    singularity: Singularity.SINGULAR,
    case: [Case.DATIVE],
    person: Person.FIRST,
    canonical: ["ego"],
});

register("$eme", {
    type: GrammarType.PARTICLE,
    gender: [],
    singularity: Singularity.SINGULAR,
    case: [Case.ACCUSATIVE],
    person: Person.FIRST,
    canonical: ["ego"],
});

register("$me", {
    type: GrammarType.PARTICLE,
    gender: [],
    singularity: Singularity.SINGULAR,
    case: [Case.ACCUSATIVE],
    person: Person.FIRST,
    canonical: ["ego"],
});

register("$hmeic", {
    type: GrammarType.PARTICLE,
    gender: [],
    singularity: Singularity.PLURAL,
    case: [Case.NOMINATIVE, Case.VOCATIVE],
    person: Person.FIRST,
    canonical: ["hmeic"],
});

register("$hmwv", {
    type: GrammarType.PARTICLE,
    gender: [],
    singularity: Singularity.PLURAL,
    case: [Case.GENITIVE],
    person: Person.FIRST,
    canonical: ["hmeic"],
});

register("$hmiv", {
    type: GrammarType.PARTICLE,
    gender: [],
    singularity: Singularity.PLURAL,
    case: [Case.DATIVE],
    person: Person.FIRST,
    canonical: ["hmeic"],
});

register("$hmac", {
    type: GrammarType.PARTICLE,
    gender: [],
    singularity: Singularity.PLURAL,
    case: [Case.ACCUSATIVE],
    person: Person.FIRST,
    canonical: ["hmeic"],
});

register("$su", {
    type: GrammarType.PARTICLE,
    gender: [],
    singularity: Singularity.SINGULAR,
    case: [Case.NOMINATIVE, Case.VOCATIVE],
    person: Person.SECOND,
    canonical: ["su"],
});

register("$sou", {
    type: GrammarType.PARTICLE,
    gender: [],
    singularity: Singularity.SINGULAR,
    case: [Case.GENITIVE],
    person: Person.SECOND,
    canonical: ["su"],
});

register("$soi", {
    type: GrammarType.PARTICLE,
    gender: [],
    singularity: Singularity.SINGULAR,
    case: [Case.DATIVE],
    person: Person.SECOND,
    canonical: ["su"],
});

register("$se", {
    type: GrammarType.PARTICLE,
    gender: [],
    singularity: Singularity.SINGULAR,
    case: [Case.ACCUSATIVE],
    person: Person.SECOND,
    canonical: ["su"],
});

register("$umeic", {
    type: GrammarType.PARTICLE,
    gender: [],
    singularity: Singularity.PLURAL,
    case: [Case.NOMINATIVE, Case.VOCATIVE],
    person: Person.SECOND,
    canonical: ["umeic"],
});

register("$umwv", {
    type: GrammarType.PARTICLE,
    gender: [],
    singularity: Singularity.PLURAL,
    case: [Case.GENITIVE],
    person: Person.SECOND,
    canonical: ["umeic"],
});

register("$umiv", {
    type: GrammarType.PARTICLE,
    gender: [],
    singularity: Singularity.PLURAL,
    case: [Case.DATIVE],
    person: Person.SECOND,
    canonical: ["umeic"],
});

register("$umac", {
    type: GrammarType.PARTICLE,
    gender: [],
    singularity: Singularity.PLURAL,
    case: [Case.ACCUSATIVE],
    person: Person.SECOND,
    canonical: ["umeic"],
});

register("$autoc", {
    type: GrammarType.PARTICLE,
    gender: [Gender.MASCULINE],
    singularity: Singularity.SINGULAR,
    case: [Case.NOMINATIVE, Case.VOCATIVE],
    person: Person.THIRD,
    canonical: ["autoc"],
});

register("$autou", {
    type: GrammarType.PARTICLE,
    gender: [Gender.MASCULINE, Gender.NEUTER],
    singularity: Singularity.SINGULAR,
    case: [Case.GENITIVE],
    person: Person.THIRD,
    canonical: ["autoc", "auto"],
});

register("$autw/", {
    type: GrammarType.PARTICLE,
    gender: [Gender.MASCULINE, Gender.NEUTER],
    singularity: Singularity.SINGULAR,
    case: [Case.DATIVE],
    person: Person.THIRD,
    canonical: ["autoc", "auto"],
});

register("$autov", {
    type: GrammarType.PARTICLE,
    gender: [Gender.MASCULINE],
    singularity: Singularity.SINGULAR,
    case: [Case.ACCUSATIVE],
    person: Person.THIRD,
    canonical: ["autoc"],
});

register("$autoi", {
    type: GrammarType.PARTICLE,
    gender: [Gender.MASCULINE],
    singularity: Singularity.PLURAL,
    case: [Case.NOMINATIVE, Case.VOCATIVE],
    person: Person.THIRD,
    canonical: ["autoi"],
});

register("$autwv", {
    type: GrammarType.PARTICLE,
    gender: [Gender.MASCULINE, Gender.NEUTER],
    singularity: Singularity.PLURAL,
    case: [Case.GENITIVE],
    person: Person.THIRD,
    canonical: ["autoi", "auta"],
});

register("$autoic", {
    type: GrammarType.PARTICLE,
    gender: [Gender.MASCULINE, Gender.NEUTER],
    singularity: Singularity.PLURAL,
    case: [Case.DATIVE],
    person: Person.THIRD,
    canonical: ["autoi", "auta"],
});

register("$autouc", {
    type: GrammarType.PARTICLE,
    gender: [Gender.MASCULINE],
    singularity: Singularity.PLURAL,
    case: [Case.ACCUSATIVE],
    person: Person.THIRD,
    canonical: ["autoi"],
});

register("$auth", {
    type: GrammarType.PARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.SINGULAR,
    case: [Case.NOMINATIVE, Case.VOCATIVE],
    person: Person.THIRD,
    canonical: ["auth"],
});

register("$authc", {
    type: GrammarType.PARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.SINGULAR,
    case: [Case.GENITIVE],
    person: Person.THIRD,
    canonical: ["auth"],
});

register("$auth/", {
    type: GrammarType.PARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.SINGULAR,
    case: [Case.DATIVE],
    person: Person.THIRD,
    canonical: ["auth"],
});

register("$authv", {
    type: GrammarType.PARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.SINGULAR,
    case: [Case.ACCUSATIVE],
    person: Person.THIRD,
    canonical: ["auth"],
});

register("$autai", {
    type: GrammarType.PARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.PLURAL,
    case: [Case.NOMINATIVE, Case.VOCATIVE],
    person: Person.THIRD,
    canonical: ["autai"],
});

register("$autwv", {
    type: GrammarType.PARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.PLURAL,
    case: [Case.GENITIVE],
    person: Person.THIRD,
    canonical: ["autai"],
});

register("$autaic", {
    type: GrammarType.PARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.PLURAL,
    case: [Case.DATIVE],
    person: Person.THIRD,
    canonical: ["autai"],
});

register("$autac", {
    type: GrammarType.PARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.PLURAL,
    case: [Case.ACCUSATIVE],
    person: Person.THIRD,
    canonical: ["autai"],
});

register("$auto", {
    type: GrammarType.PARTICLE,
    gender: [Gender.NEUTER],
    singularity: Singularity.SINGULAR,
    case: [Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE],
    person: Person.THIRD,
    canonical: ["auto"],
});

register("$auta", {
    type: GrammarType.PARTICLE,
    gender: [Gender.NEUTER],
    singularity: Singularity.PLURAL,
    case: [Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE],
    person: Person.THIRD,
    canonical: ["auta"],
});
