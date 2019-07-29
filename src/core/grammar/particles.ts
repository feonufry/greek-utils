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

register("$outoc", {
    type: GrammarType.PARTICLE,
    gender: [Gender.MASCULINE],
    singularity: Singularity.SINGULAR,
    case: [Case.NOMINATIVE, Case.VOCATIVE],
    canonical: ["outoc"],
});

register("$toutou", {
    type: GrammarType.PARTICLE,
    gender: [Gender.MASCULINE, Gender.NEUTER],
    singularity: Singularity.SINGULAR,
    case: [Case.GENITIVE],
    canonical: ["outoc", "touto"],
});

register("$toutw/", {
    type: GrammarType.PARTICLE,
    gender: [Gender.MASCULINE, Gender.NEUTER],
    singularity: Singularity.SINGULAR,
    case: [Case.DATIVE],
    canonical: ["outoc", "touto"],
});

register("$toutov", {
    type: GrammarType.PARTICLE,
    gender: [Gender.MASCULINE],
    singularity: Singularity.SINGULAR,
    case: [Case.ACCUSATIVE],
    canonical: ["outoc"],
});

register("$auth", {
    type: GrammarType.PARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.SINGULAR,
    case: [Case.NOMINATIVE, Case.VOCATIVE],
    canonical: ["auth"],
});

register("$tauthc", {
    type: GrammarType.PARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.SINGULAR,
    case: [Case.GENITIVE],
    canonical: ["auth"],
});

register("$tauth/", {
    type: GrammarType.PARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.SINGULAR,
    case: [Case.DATIVE],
    canonical: ["auth"],
});

register("$tauthv", {
    type: GrammarType.PARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.SINGULAR,
    case: [Case.ACCUSATIVE],
    canonical: ["auth"],
});

register("$touto", {
    type: GrammarType.PARTICLE,
    gender: [Gender.NEUTER],
    singularity: Singularity.SINGULAR,
    case: [Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE],
    canonical: ["touto"],
});

register("$outoi", {
    type: GrammarType.PARTICLE,
    gender: [Gender.MASCULINE],
    singularity: Singularity.PLURAL,
    case: [Case.NOMINATIVE, Case.VOCATIVE],
    canonical: ["outoi"],
});

register("$toutwv", {
    type: GrammarType.PARTICLE,
    gender: [Gender.MASCULINE, Gender.FEMININE, Gender.NEUTER],
    singularity: Singularity.PLURAL,
    case: [Case.GENITIVE],
    canonical: ["outoi", "autai", "tauta"],
});

register("$toutoic", {
    type: GrammarType.PARTICLE,
    gender: [Gender.MASCULINE, Gender.NEUTER],
    singularity: Singularity.PLURAL,
    case: [Case.DATIVE],
    canonical: ["outoi", "tauta"],
});

register("$toutouc", {
    type: GrammarType.PARTICLE,
    gender: [Gender.MASCULINE],
    singularity: Singularity.PLURAL,
    case: [Case.ACCUSATIVE],
    canonical: ["outoi"],
});

register("$autai", {
    type: GrammarType.PARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.PLURAL,
    case: [Case.NOMINATIVE, Case.VOCATIVE],
    canonical: ["autai"],
});

register("$tautaic", {
    type: GrammarType.PARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.PLURAL,
    case: [Case.DATIVE],
    canonical: ["autai"],
});

register("$tautac", {
    type: GrammarType.PARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.PLURAL,
    case: [Case.ACCUSATIVE],
    canonical: ["autai"],
});

register("$tauta", {
    type: GrammarType.PARTICLE,
    gender: [Gender.NEUTER],
    singularity: Singularity.PLURAL,
    case: [Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE],
    canonical: ["tauta"],
});

register("$ekeivoc", {
    type: GrammarType.PARTICLE,
    gender: [Gender.MASCULINE],
    singularity: Singularity.SINGULAR,
    case: [Case.NOMINATIVE, Case.VOCATIVE],
    person: Person.THIRD,
    canonical: ["ekeivoc"],
});

register("$ekeivou", {
    type: GrammarType.PARTICLE,
    gender: [Gender.MASCULINE, Gender.NEUTER],
    singularity: Singularity.SINGULAR,
    case: [Case.GENITIVE],
    person: Person.THIRD,
    canonical: ["ekeivoc", "ekeivo"],
});

register("ekeivw/", {
    type: GrammarType.PARTICLE,
    gender: [Gender.MASCULINE, Gender.NEUTER],
    singularity: Singularity.SINGULAR,
    case: [Case.DATIVE],
    person: Person.THIRD,
    canonical: ["ekeivoc", "ekeivo"],
});

register("$ekeivov", {
    type: GrammarType.PARTICLE,
    gender: [Gender.MASCULINE],
    singularity: Singularity.SINGULAR,
    case: [Case.ACCUSATIVE],
    person: Person.THIRD,
    canonical: ["ekeivoc"],
});

register("$ekeivoi", {
    type: GrammarType.PARTICLE,
    gender: [Gender.MASCULINE],
    singularity: Singularity.PLURAL,
    case: [Case.NOMINATIVE, Case.VOCATIVE],
    person: Person.THIRD,
    canonical: ["ekeivoi"],
});

register("$ekeivwv", {
    type: GrammarType.PARTICLE,
    gender: [Gender.MASCULINE, Gender.NEUTER],
    singularity: Singularity.PLURAL,
    case: [Case.GENITIVE],
    person: Person.THIRD,
    canonical: ["ekeivoi", "ekeiva"],
});

register("$ekeivoic", {
    type: GrammarType.PARTICLE,
    gender: [Gender.MASCULINE, Gender.NEUTER],
    singularity: Singularity.PLURAL,
    case: [Case.DATIVE],
    person: Person.THIRD,
    canonical: ["ekeivoi", "ekeiva"],
});

register("$ekeivouc", {
    type: GrammarType.PARTICLE,
    gender: [Gender.MASCULINE],
    singularity: Singularity.PLURAL,
    case: [Case.ACCUSATIVE],
    person: Person.THIRD,
    canonical: ["ekeivoi"],
});

register("$ekeivh", {
    type: GrammarType.PARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.SINGULAR,
    case: [Case.NOMINATIVE, Case.VOCATIVE],
    person: Person.THIRD,
    canonical: ["ekeivh"],
});

register("$ekeivhc", {
    type: GrammarType.PARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.SINGULAR,
    case: [Case.GENITIVE],
    person: Person.THIRD,
    canonical: ["ekeivh"],
});

register("$ekeivh/", {
    type: GrammarType.PARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.SINGULAR,
    case: [Case.DATIVE],
    person: Person.THIRD,
    canonical: ["ekeivh"],
});

register("$ekeivhv", {
    type: GrammarType.PARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.SINGULAR,
    case: [Case.ACCUSATIVE],
    person: Person.THIRD,
    canonical: ["ekeivh"],
});

register("$ekeivai", {
    type: GrammarType.PARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.PLURAL,
    case: [Case.NOMINATIVE, Case.VOCATIVE],
    person: Person.THIRD,
    canonical: ["ekeivai"],
});

register("$ekeivwv", {
    type: GrammarType.PARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.PLURAL,
    case: [Case.GENITIVE],
    person: Person.THIRD,
    canonical: ["ekeivai"],
});

register("$ekeivaic", {
    type: GrammarType.PARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.PLURAL,
    case: [Case.DATIVE],
    person: Person.THIRD,
    canonical: ["ekeivai"],
});

register("$ekeivac", {
    type: GrammarType.PARTICLE,
    gender: [Gender.FEMININE],
    singularity: Singularity.PLURAL,
    case: [Case.ACCUSATIVE],
    person: Person.THIRD,
    canonical: ["ekeivai"],
});

register("$ekeivo", {
    type: GrammarType.PARTICLE,
    gender: [Gender.NEUTER],
    singularity: Singularity.SINGULAR,
    case: [Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE],
    person: Person.THIRD,
    canonical: ["ekeivo"],
});

register("$ekeiva", {
    type: GrammarType.PARTICLE,
    gender: [Gender.NEUTER],
    singularity: Singularity.PLURAL,
    case: [Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE],
    person: Person.THIRD,
    canonical: ["ekeiva"],
});

