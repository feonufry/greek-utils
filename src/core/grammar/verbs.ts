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
