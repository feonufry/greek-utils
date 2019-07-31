import { register } from "./registry";
import { CanonicalTransformation, GrammarType, Mood, Person, Singularity, Tense, Voice } from "./index";

//===================================================================================
//  TO BE
//===================================================================================

// Present

register("$eimi", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.ACTIVE,
    person: Person.FIRST,
    singularity: Singularity.SINGULAR,
    canonical: ["eimi"],
    canonicalTransformations: []
});

register("$esmev", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.ACTIVE,
    person: Person.FIRST,
    singularity: Singularity.PLURAL,
    canonical: ["eimi"],
    canonicalTransformations: []
});

register("$ei", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.ACTIVE,
    person: Person.SECOND,
    singularity: Singularity.SINGULAR,
    canonical: ["eimi"],
    canonicalTransformations: []
});

register("$este", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.ACTIVE,
    person: Person.SECOND,
    singularity: Singularity.PLURAL,
    canonical: ["eimi"],
    canonicalTransformations: []
});

register("$esti", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.ACTIVE,
    person: Person.THIRD,
    singularity: Singularity.SINGULAR,
    canonical: ["eimi"],
    canonicalTransformations: []
});

register("$estiv", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.ACTIVE,
    person: Person.THIRD,
    singularity: Singularity.SINGULAR,
    canonical: ["eimi"],
    canonicalTransformations: []
});

register("$eisi", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.ACTIVE,
    person: Person.THIRD,
    singularity: Singularity.PLURAL,
    canonical: ["eimi"],
    canonicalTransformations: []
});

register("$eisiv", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.ACTIVE,
    person: Person.THIRD,
    singularity: Singularity.PLURAL,
    canonical: ["eimi"],
    canonicalTransformations: []
});

// Imperfect Active

register("$hmhv", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.IMPERFECT,
    voice: Voice.ACTIVE,
    person: Person.FIRST,
    singularity: Singularity.SINGULAR,
    canonical: ["eimi"],
    canonicalTransformations: []
});

register("$hmev", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.IMPERFECT,
    voice: Voice.ACTIVE,
    person: Person.FIRST,
    singularity: Singularity.PLURAL,
    canonical: ["eimi"],
    canonicalTransformations: []
});

register("$hc", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.IMPERFECT,
    voice: Voice.ACTIVE,
    person: Person.SECOND,
    singularity: Singularity.SINGULAR,
    canonical: ["eimi"],
    canonicalTransformations: []
});

register("$hte", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.IMPERFECT,
    voice: Voice.ACTIVE,
    person: Person.SECOND,
    singularity: Singularity.PLURAL,
    canonical: ["eimi"],
    canonicalTransformations: []
});

register("$hv", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.IMPERFECT,
    voice: Voice.ACTIVE,
    person: Person.THIRD,
    singularity: Singularity.SINGULAR,
    canonical: ["eimi"],
    canonicalTransformations: []
});

register("$hsav", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.IMPERFECT,
    voice: Voice.ACTIVE,
    person: Person.THIRD,
    singularity: Singularity.PLURAL,
    canonical: ["eimi"],
    canonicalTransformations: []
});

//===================================================================================
//  GENERAL
//===================================================================================

// Present Active

register("w", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.ACTIVE,
    person: Person.FIRST,
    singularity: Singularity.SINGULAR,
    canonical: [],
    canonicalTransformations: []
});

register("omev", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.ACTIVE,
    person: Person.FIRST,
    singularity: Singularity.PLURAL,
    canonical: [],
    canonicalTransformations: transform("omev", "w"),
});

register("eic", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.ACTIVE,
    person: Person.SECOND,
    singularity: Singularity.SINGULAR,
    canonical: [],
    canonicalTransformations: transform("eic", "w"),
});

register("ete", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.ACTIVE,
    person: Person.SECOND,
    singularity: Singularity.PLURAL,
    canonical: [],
    canonicalTransformations: transform("ete", "w"),
});

register("ei", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.ACTIVE,
    person: Person.THIRD,
    singularity: Singularity.SINGULAR,
    canonical: [],
    canonicalTransformations: transform("ei", "w"),
});

register("ousi", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.ACTIVE,
    person: Person.THIRD,
    singularity: Singularity.PLURAL,
    canonical: [],
    canonicalTransformations: transform("ousi", "w"),
});

register("ousiv", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.ACTIVE,
    person: Person.THIRD,
    singularity: Singularity.PLURAL,
    canonical: [],
    canonicalTransformations: transform("ousiv", "w"),
});

// Present Media-Passive

register("omai", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.MEDIA_PASSIVE,
    person: Person.FIRST,
    singularity: Singularity.SINGULAR,
    canonical: [],
    canonicalTransformations: transform("omai", "w", "omai"),
});

register("omeqa", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.MEDIA_PASSIVE,
    person: Person.FIRST,
    singularity: Singularity.PLURAL,
    canonical: [],
    canonicalTransformations: transform("omeqa", "w", "omai"),
});

register("h/", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.MEDIA_PASSIVE,
    person: Person.SECOND,
    singularity: Singularity.SINGULAR,
    canonical: [],
    canonicalTransformations: transform("h/", "w", "omai"),
});

register("esai", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.MEDIA_PASSIVE,
    person: Person.SECOND,
    singularity: Singularity.SINGULAR,
    canonical: [],
    canonicalTransformations: transform("esai", "w", "omai"),
});

register("esqe", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.MEDIA_PASSIVE,
    person: Person.SECOND,
    singularity: Singularity.PLURAL,
    canonical: [],
    canonicalTransformations: transform("esqe", "w", "omai"),
});

register("etai", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.MEDIA_PASSIVE,
    person: Person.THIRD,
    singularity: Singularity.SINGULAR,
    canonical: [],
    canonicalTransformations: transform("etai", "w", "omai"),
});

register("ovtai", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.MEDIA_PASSIVE,
    person: Person.THIRD,
    singularity: Singularity.PLURAL,
    canonical: [],
    canonicalTransformations: transform("ovtai", "w", "omai"),
});

// Imperfect Active

register("ov", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.IMPERFECT,
    voice: Voice.ACTIVE,
    person: Person.FIRST,
    singularity: Singularity.SINGULAR,
    canonical: [],
    canonicalTransformations: transform("ov", "w"),
    incremented: true,
});

register("omev", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.IMPERFECT,
    voice: Voice.ACTIVE,
    person: Person.FIRST,
    singularity: Singularity.PLURAL,
    canonical: [],
    canonicalTransformations: transform("omev", "w"),
    incremented: true,
});

register("ec", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.IMPERFECT,
    voice: Voice.ACTIVE,
    person: Person.SECOND,
    singularity: Singularity.SINGULAR,
    canonical: [],
    canonicalTransformations: transform("ec", "w"),
    incremented: true,
});

register("ete", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.IMPERFECT,
    voice: Voice.ACTIVE,
    person: Person.SECOND,
    singularity: Singularity.PLURAL,
    canonical: [],
    canonicalTransformations: transform("ete", "w"),
    incremented: true,
});

register("e", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.IMPERFECT,
    voice: Voice.ACTIVE,
    person: Person.THIRD,
    singularity: Singularity.SINGULAR,
    canonical: [],
    canonicalTransformations: transform("e", "w"),
    incremented: true,
});

register("ev", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.IMPERFECT,
    voice: Voice.ACTIVE,
    person: Person.THIRD,
    singularity: Singularity.SINGULAR,
    canonical: [],
    canonicalTransformations: transform("ev", "w"),
    incremented: true,
});

// Imperfect Medio-Passive

register("omhv", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.IMPERFECT,
    voice: Voice.MEDIA_PASSIVE,
    person: Person.FIRST,
    singularity: Singularity.SINGULAR,
    canonical: [],
    canonicalTransformations: transform("omhv", "w", "omai"),
    incremented: true,
});

register("omeqa", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.IMPERFECT,
    voice: Voice.MEDIA_PASSIVE,
    person: Person.FIRST,
    singularity: Singularity.PLURAL,
    canonical: [],
    canonicalTransformations: transform("omeqa", "w", "omai"),
    incremented: true,
});

register("ou", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.IMPERFECT,
    voice: Voice.MEDIA_PASSIVE,
    person: Person.SECOND,
    singularity: Singularity.SINGULAR,
    canonical: [],
    canonicalTransformations: transform("ou", "w", "omai"),
    incremented: true,
});

register("esqe", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.IMPERFECT,
    voice: Voice.MEDIA_PASSIVE,
    person: Person.SECOND,
    singularity: Singularity.PLURAL,
    canonical: [],
    canonicalTransformations: transform("esqe", "w", "omai"),
    incremented: true,
});

register("eto", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.IMPERFECT,
    voice: Voice.MEDIA_PASSIVE,
    person: Person.THIRD,
    singularity: Singularity.SINGULAR,
    canonical: [],
    canonicalTransformations: transform("eto", "w", "omai"),
    incremented: true,
});

register("ovto", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.IMPERFECT,
    voice: Voice.MEDIA_PASSIVE,
    person: Person.THIRD,
    singularity: Singularity.SINGULAR,
    canonical: [],
    canonicalTransformations: transform("ovto", "w", "omai"),
    incremented: true,
});

// Imperfect Medio-Passive

register("omhv", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.IMPERFECT,
    voice: Voice.MEDIA_PASSIVE,
    person: Person.FIRST,
    singularity: Singularity.SINGULAR,
    canonical: [],
    canonicalTransformations: transform("omhv", "w", "omai"),
    incremented: true,
});

register("omeqa", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.IMPERFECT,
    voice: Voice.MEDIA_PASSIVE,
    person: Person.FIRST,
    singularity: Singularity.PLURAL,
    canonical: [],
    canonicalTransformations: transform("omeqa", "w", "omai"),
    incremented: true,
});

register("ou", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.IMPERFECT,
    voice: Voice.MEDIA_PASSIVE,
    person: Person.SECOND,
    singularity: Singularity.SINGULAR,
    canonical: [],
    canonicalTransformations: transform("ou", "w", "omai"),
    incremented: true,
});

register("esqe", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.IMPERFECT,
    voice: Voice.MEDIA_PASSIVE,
    person: Person.SECOND,
    singularity: Singularity.PLURAL,
    canonical: [],
    canonicalTransformations: transform("esqe", "w", "omai"),
    incremented: true,
});

register("eto", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.IMPERFECT,
    voice: Voice.MEDIA_PASSIVE,
    person: Person.THIRD,
    singularity: Singularity.SINGULAR,
    canonical: [],
    canonicalTransformations: transform("eto", "w", "omai"),
    incremented: true,
});

register("ovto", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.IMPERFECT,
    voice: Voice.MEDIA_PASSIVE,
    person: Person.THIRD,
    singularity: Singularity.SINGULAR,
    canonical: [],
    canonicalTransformations: transform("ovto", "w", "omai"),
    incremented: true,
});

// Aorist I Active

const AoristActiveReplacementsSA = [
    "w", "dw", "tw", "qw", "zw",
];

const AoristActiveReplacementsJA = [
    "bw", "pw", "фw",
];

const AoristActiveReplacementsXA = [
    "gw", "kw", "хw", "ssw",
];

function registerActiveAorist(suffixes: string[], person: Person, singularity: Singularity, transformations: CanonicalTransformation[]) {
    for (const suffix of suffixes) {
        register(suffix, {
            type: GrammarType.VERB,
            mood: Mood.INDICATIVE,
            tense: Tense.AORIST,
            voice: Voice.ACTIVE,
            canonical: [],
            canonicalTransformations: transformations,
            incremented: true,
            person,
            singularity,
        });
    }
}

registerActiveAorist(
    ["sa", "ja", "xa"],
    Person.FIRST,
    Singularity.SINGULAR,
    [
        ...transform("sa", ...AoristActiveReplacementsSA),
        ...transform("ja", ...AoristActiveReplacementsJA),
        ...transform("xa", ...AoristActiveReplacementsXA),
    ]);

registerActiveAorist(
    ["samev", "jamev", "xamev"],
    Person.FIRST,
    Singularity.PLURAL,
    [
        ...transform("samev", ...AoristActiveReplacementsSA),
        ...transform("jamev", ...AoristActiveReplacementsJA),
        ...transform("xamev", ...AoristActiveReplacementsXA),
    ]);

registerActiveAorist(
    ["sac", "jac", "xac"],
    Person.SECOND,
    Singularity.SINGULAR,
    [
        ...transform("sac", ...AoristActiveReplacementsSA),
        ...transform("jac", ...AoristActiveReplacementsJA),
        ...transform("xac", ...AoristActiveReplacementsXA),
    ]);

registerActiveAorist(
    ["sate", "jate", "xate"],
    Person.SECOND,
    Singularity.PLURAL,
    [
        ...transform("sate", ...AoristActiveReplacementsSA),
        ...transform("jate", ...AoristActiveReplacementsJA),
        ...transform("xate", ...AoristActiveReplacementsXA),
    ]);

registerActiveAorist(
    ["se", "je", "xe", "sev", "jev", "xev"],
    Person.THIRD,
    Singularity.SINGULAR,
    [
        ...transform("se", ...AoristActiveReplacementsSA),
        ...transform("je", ...AoristActiveReplacementsJA),
        ...transform("xe", ...AoristActiveReplacementsXA),
        ...transform("sev", ...AoristActiveReplacementsSA),
        ...transform("jev", ...AoristActiveReplacementsJA),
        ...transform("xev", ...AoristActiveReplacementsXA),
    ]);

registerActiveAorist(
    ["sav", "jav", "xav"],
    Person.THIRD,
    Singularity.PLURAL,
    [
        ...transform("sav", ...AoristActiveReplacementsSA),
        ...transform("jav", ...AoristActiveReplacementsJA),
        ...transform("xav", ...AoristActiveReplacementsXA),
    ]);

// Aorist I Medio-Passive

const AoristMedioPassiveReplacementsSA = [
    "w", "dw", "tw", "qw", "zw",
    "omai", "domai", "tomai", "qomai", "zomai"
];

const AoristMedioPassiveReplacementsJA = [
    "bw", "pw", "фw",
    "bomai", "pomai", "фomai",
];

const AoristMedioPassiveReplacementsXA = [
    "gw", "kw", "хw", "ssw",
    "gomai", "komai", "xomai", "ssomai"
];

function registerMedioPassiveAorist(suffixes: string[], person: Person, singularity: Singularity, transformations: CanonicalTransformation[]) {
    for (const suffix of suffixes) {
        register(suffix, {
            type: GrammarType.VERB,
            mood: Mood.INDICATIVE,
            tense: Tense.AORIST,
            voice: Voice.MEDIA_PASSIVE,
            canonical: [],
            canonicalTransformations: transformations,
            incremented: true,
            person,
            singularity,
        });
    }
}

registerMedioPassiveAorist(
    ["samhv", "jamhv", "xamhv"],
    Person.FIRST,
    Singularity.SINGULAR,
    [
        ...transform("samhv", ...AoristMedioPassiveReplacementsSA),
        ...transform("jamhv", ...AoristMedioPassiveReplacementsJA),
        ...transform("xamhv", ...AoristMedioPassiveReplacementsXA),
    ]);

registerMedioPassiveAorist(
    ["sameqa", "jameqa", "xameqa"],
    Person.FIRST,
    Singularity.PLURAL,
    [
        ...transform("sameqa", ...AoristMedioPassiveReplacementsSA),
        ...transform("jameqa", ...AoristMedioPassiveReplacementsJA),
        ...transform("xameqa", ...AoristMedioPassiveReplacementsXA),
    ]);

registerMedioPassiveAorist(
    ["sw", "jw", "xw"],
    Person.SECOND,
    Singularity.SINGULAR,
    [
        ...transform("sw", ...AoristMedioPassiveReplacementsSA),
        ...transform("jw", ...AoristMedioPassiveReplacementsJA),
        ...transform("xw", ...AoristMedioPassiveReplacementsXA),
    ]);

registerMedioPassiveAorist(
    ["sasqe", "jasqe", "xasqe"],
    Person.SECOND,
    Singularity.PLURAL,
    [
        ...transform("sasqe", ...AoristMedioPassiveReplacementsSA),
        ...transform("jasqe", ...AoristMedioPassiveReplacementsJA),
        ...transform("xasqe", ...AoristMedioPassiveReplacementsXA),
    ]);

registerMedioPassiveAorist(
    ["sato", "jato", "xato"],
    Person.THIRD,
    Singularity.SINGULAR,
    [
        ...transform("sato", ...AoristMedioPassiveReplacementsSA),
        ...transform("jato", ...AoristMedioPassiveReplacementsJA),
        ...transform("xato", ...AoristMedioPassiveReplacementsXA),
    ]);

registerMedioPassiveAorist(
    ["savto", "javto", "xavto"],
    Person.THIRD,
    Singularity.PLURAL,
    [
        ...transform("savto", ...AoristMedioPassiveReplacementsSA),
        ...transform("javto", ...AoristMedioPassiveReplacementsJA),
        ...transform("xavto", ...AoristMedioPassiveReplacementsXA),
    ]);

//===================================================================================
//  UTILS
//===================================================================================

function transform(original: string, ...replacements: string[]) {
    return replacements.map(replacement => ({ original, replacement }));
}
