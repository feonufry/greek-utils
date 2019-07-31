import { register } from "./registry";
import { GrammarType, Mood, Person, Singularity, Tense, Voice } from "./index";

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
    canonicalTransformations: [{
        original: "omev",
        replacement: "w"
    }]
});

register("eic", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.ACTIVE,
    person: Person.SECOND,
    singularity: Singularity.SINGULAR,
    canonical: [],
    canonicalTransformations: [{
        original: "eic",
        replacement: "w"
    }]
});

register("ete", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.ACTIVE,
    person: Person.SECOND,
    singularity: Singularity.PLURAL,
    canonical: [],
    canonicalTransformations: [{
        original: "ete",
        replacement: "w"
    }]
});

register("ei", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.ACTIVE,
    person: Person.THIRD,
    singularity: Singularity.SINGULAR,
    canonical: [],
    canonicalTransformations: [{
        original: "ei",
        replacement: "w"
    }]
});

register("ousi", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.ACTIVE,
    person: Person.THIRD,
    singularity: Singularity.PLURAL,
    canonical: [],
    canonicalTransformations: [{
        original: "ousi",
        replacement: "w"
    }]
});

register("ousiv", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.ACTIVE,
    person: Person.THIRD,
    singularity: Singularity.PLURAL,
    canonical: [],
    canonicalTransformations: [{
        original: "ousiv",
        replacement: "w"
    }]
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
    canonicalTransformations: [{
        original: "omai",
        replacement: "w"
    }]
});

register("omeqa", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.MEDIA_PASSIVE,
    person: Person.FIRST,
    singularity: Singularity.PLURAL,
    canonical: [],
    canonicalTransformations: [{
        original: "omeqa",
        replacement: "w"
    }]
});

register("h/", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.MEDIA_PASSIVE,
    person: Person.SECOND,
    singularity: Singularity.SINGULAR,
    canonical: [],
    canonicalTransformations: [{
        original: "h/",
        replacement: "w"
    }]
});

register("esai", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.MEDIA_PASSIVE,
    person: Person.SECOND,
    singularity: Singularity.SINGULAR,
    canonical: [],
    canonicalTransformations: [{
        original: "esai",
        replacement: "w"
    }]
});

register("esqe", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.MEDIA_PASSIVE,
    person: Person.SECOND,
    singularity: Singularity.PLURAL,
    canonical: [],
    canonicalTransformations: [{
        original: "esqe",
        replacement: "w"
    }]
});

register("etai", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.MEDIA_PASSIVE,
    person: Person.THIRD,
    singularity: Singularity.SINGULAR,
    canonical: [],
    canonicalTransformations: [{
        original: "etai",
        replacement: "w"
    }]
});

register("ovtai", {
    type: GrammarType.VERB,
    mood: Mood.INDICATIVE,
    tense: Tense.PRESENT,
    voice: Voice.MEDIA_PASSIVE,
    person: Person.THIRD,
    singularity: Singularity.PLURAL,
    canonical: [],
    canonicalTransformations: [{
        original: "ovtai",
        replacement: "w"
    }]
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
    canonicalTransformations: [{
        original: "ov",
        replacement: "w"
    }],
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
    canonicalTransformations: [{
        original: "omev",
        replacement: "w"
    }],
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
    canonicalTransformations: [{
        original: "ec",
        replacement: "w"
    }],
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
    canonicalTransformations: [{
        original: "ete",
        replacement: "w"
    }],
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
    canonicalTransformations: [{
        original: "e",
        replacement: "w"
    }],
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
    canonicalTransformations: [{
        original: "ev",
        replacement: "w"
    }],
    incremented: true,
});
