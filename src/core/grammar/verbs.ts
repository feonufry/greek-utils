import {register} from "./registry";
import {CanonicalTransformation, GrammarType, Mood, Person, Singularity, Tense, Voice} from "./index";

const Aorist1ActiveReplacementsSA = [
    "w", "dw", "tw", "qw", "zw",
];

const Aorist1ActiveReplacementsJA = [
    "bw", "pw", "фw",
];

const Aorist1ActiveReplacementsXA = [
    "gw", "kw", "хw", "ssw",
];

const Aorist1MedioPassiveReplacementsSA = [
    "w", "dw", "tw", "qw", "zw",
    "omai", "domai", "tomai", "qomai", "zomai"
];

const Aorist1MedioPassiveReplacementsJA = [
    "bw", "pw", "фw",
    "bomai", "pomai", "фomai",
];

const Aorist1MedioPassiveReplacementsXA = [
    "gw", "kw", "хw", "ssw",
    "gomai", "komai", "xomai", "ssomai"
];

mood(Mood.INDICATIVE,
    tense(Tense.PRESENT, Voice.ACTIVE,
        form(Person.FIRST, Singularity.SINGULAR, postfix("w")),
        form(Person.FIRST, Singularity.PLURAL, postfix("omev", "w")),
        form(Person.SECOND, Singularity.SINGULAR, postfix("eic",  "w")),
        form(Person.SECOND, Singularity.PLURAL, postfix("ete", "w")),
        form(Person.THIRD, Singularity.SINGULAR, postfix("ei",  "w")),
        form(Person.THIRD, Singularity.PLURAL,
            postfix("ousi", "w"),
            postfix("ousiv", "w"),
        ),
    ),
    tense(Tense.PRESENT, Voice.MEDIA_PASSIVE,
        form(Person.FIRST, Singularity.SINGULAR, postfix("omai", "w", "omai")),
        form(Person.FIRST, Singularity.PLURAL, postfix("omeqa", "w", "omai")),
        form(Person.SECOND, Singularity.SINGULAR,
            postfix("h/", "w", "omai"),
            postfix("esai", "w", "omai"),
        ),
        form(Person.SECOND, Singularity.PLURAL, postfix("esqe", "w", "omai")),
        form(Person.THIRD, Singularity.SINGULAR, postfix("etai", "w", "omai")),
        form(Person.THIRD, Singularity.PLURAL, postfix("ovtai", "w", "omai")),
    ),
    tense(Tense.IMPERFECT, Voice.ACTIVE,
        form(Person.FIRST, Singularity.SINGULAR, incrementPostfix("ov", "w")),
        form(Person.FIRST, Singularity.PLURAL, incrementPostfix("omev", "w")),
        form(Person.SECOND, Singularity.SINGULAR, incrementPostfix("ec", "w")),
        form(Person.SECOND, Singularity.PLURAL, incrementPostfix("ete", "w")),
        form(Person.THIRD, Singularity.SINGULAR,
            incrementPostfix("e", "w"),
            incrementPostfix("ev", "w"),
        ),
        form(Person.THIRD, Singularity.PLURAL, incrementPostfix("ov", "w")),
    ),
    tense(Tense.IMPERFECT, Voice.MEDIA_PASSIVE,
        form(Person.FIRST, Singularity.SINGULAR, incrementPostfix("omhv", "w", "omai")),
        form(Person.FIRST, Singularity.PLURAL, incrementPostfix("omeqa", "w", "omai")),
        form(Person.SECOND, Singularity.SINGULAR, incrementPostfix("ou", "w", "omai")),
        form(Person.SECOND, Singularity.PLURAL, incrementPostfix("esqe", "w", "omai")),
        form(Person.THIRD, Singularity.SINGULAR, incrementPostfix("eto", "w", "omai")),
        form(Person.THIRD, Singularity.PLURAL, incrementPostfix("ovto", "w", "omai")),
    ),
    tense(Tense.AORIST_1, Voice.ACTIVE,
        form(Person.FIRST, Singularity.SINGULAR,
            incrementPostfix("sa", ...Aorist1ActiveReplacementsSA),
            incrementPostfix("ja", ...Aorist1ActiveReplacementsJA),
            incrementPostfix("xa", ...Aorist1ActiveReplacementsXA),
        ),
        form(Person.FIRST, Singularity.PLURAL,
            incrementPostfix("samev", ...Aorist1ActiveReplacementsSA),
            incrementPostfix("jamev", ...Aorist1ActiveReplacementsJA),
            incrementPostfix("xamev", ...Aorist1ActiveReplacementsXA),
        ),
        form(Person.SECOND, Singularity.SINGULAR,
            incrementPostfix("sac", ...Aorist1ActiveReplacementsSA),
            incrementPostfix("jac", ...Aorist1ActiveReplacementsJA),
            incrementPostfix("xac", ...Aorist1ActiveReplacementsXA),
        ),
        form(Person.SECOND, Singularity.PLURAL,
            incrementPostfix("sate", ...Aorist1ActiveReplacementsSA),
            incrementPostfix("jate", ...Aorist1ActiveReplacementsJA),
            incrementPostfix("xate", ...Aorist1ActiveReplacementsXA),
        ),
        form(Person.THIRD, Singularity.SINGULAR,
            incrementPostfix("se", ...Aorist1ActiveReplacementsSA),
            incrementPostfix("je", ...Aorist1ActiveReplacementsJA),
            incrementPostfix("xe", ...Aorist1ActiveReplacementsXA),
            incrementPostfix("sev", ...Aorist1ActiveReplacementsSA),
            incrementPostfix("jev", ...Aorist1ActiveReplacementsJA),
            incrementPostfix("xev", ...Aorist1ActiveReplacementsXA),
        ),
        form(Person.THIRD, Singularity.PLURAL,
            incrementPostfix("sav", ...Aorist1ActiveReplacementsSA),
            incrementPostfix("jav", ...Aorist1ActiveReplacementsJA),
            incrementPostfix("xav", ...Aorist1ActiveReplacementsXA),
        ),
    ),
    tense(Tense.AORIST_1, Voice.MEDIA_PASSIVE,
        form(Person.FIRST, Singularity.SINGULAR,
            incrementPostfix("samhv", ...Aorist1MedioPassiveReplacementsSA),
            incrementPostfix("jamhv", ...Aorist1MedioPassiveReplacementsJA),
            incrementPostfix("xamhv", ...Aorist1MedioPassiveReplacementsXA),
        ),
        form(Person.FIRST, Singularity.PLURAL,
            incrementPostfix("sameqa", ...Aorist1MedioPassiveReplacementsSA),
            incrementPostfix("jameqa", ...Aorist1MedioPassiveReplacementsJA),
            incrementPostfix("xameqa", ...Aorist1MedioPassiveReplacementsXA),
        ),
        form(Person.SECOND, Singularity.SINGULAR,
            incrementPostfix("sw", ...Aorist1MedioPassiveReplacementsSA),
            incrementPostfix("jw", ...Aorist1MedioPassiveReplacementsJA),
            incrementPostfix("xw", ...Aorist1MedioPassiveReplacementsXA),
        ),
        form(Person.SECOND, Singularity.PLURAL,
            incrementPostfix("sasqe", ...Aorist1MedioPassiveReplacementsSA),
            incrementPostfix("jasqe", ...Aorist1MedioPassiveReplacementsJA),
            incrementPostfix("xasqe", ...Aorist1MedioPassiveReplacementsXA),
        ),
        form(Person.THIRD, Singularity.SINGULAR,
            incrementPostfix("sato", ...Aorist1MedioPassiveReplacementsSA),
            incrementPostfix("jato", ...Aorist1MedioPassiveReplacementsJA),
            incrementPostfix("xato", ...Aorist1MedioPassiveReplacementsXA),
        ),
        form(Person.THIRD, Singularity.PLURAL,
            incrementPostfix("savto", ...Aorist1MedioPassiveReplacementsSA),
            incrementPostfix("javto", ...Aorist1MedioPassiveReplacementsJA),
            incrementPostfix("xavto", ...Aorist1MedioPassiveReplacementsXA),
        ),
    ),
);

//===================================================================================
//  UTILS
//===================================================================================

interface FormAndTransformation {
    form: string;
    transformations: CanonicalTransformation[];
    incremented?: boolean;
}

interface PersonForm {
    forms: FormAndTransformation[];
    person: Person;
    singularity: Singularity;
}

interface TenseForm {
    tense: Tense;
    voice: Voice;
    personForms: PersonForm[];
}

function tense(tense: Tense, voice: Voice, ...personForms: PersonForm[]): TenseForm {
    return { tense, voice, personForms };
}

function form(person: Person, singularity: Singularity, ...forms: FormAndTransformation[]): PersonForm {
    return { forms, person, singularity };
}

function postfix(postfix: string, ...replacements: string[]): FormAndTransformation {
    return {
        form: postfix,
        transformations: replacements.map(replacement => ({ original: postfix, replacement })),
    };
}

function incrementPostfix(postfix: string, ...replacements: string[]): FormAndTransformation {
    return {
        form: postfix,
        transformations: replacements.map(replacement => ({ original: postfix, replacement })),
        incremented: true,
    };
}

function mood(mood: Mood, ...tenseForms: TenseForm[]) {
    for (const tenseForm of tenseForms) {
        for (const personForm of tenseForm.personForms) {
            for (const form of personForm.forms) {
                register(form.form, {
                    type: GrammarType.VERB,
                    tense: tenseForm.tense,
                    voice: tenseForm.voice,
                    person: personForm.person,
                    singularity: personForm.singularity,
                    canonical: [],
                    canonicalTransformations: form.transformations,
                    incremented: form.incremented,
                    mood,
                });
            }
        }
    }
}
