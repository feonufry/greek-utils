import { register } from "./registry";
import { GrammarType, Mood, Person, Singularity, Tense, Voice } from "./index";

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
