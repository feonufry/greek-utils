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

const Aorist1MediaReplacementsSA = [
    "w", "dw", "tw", "qw", "zw",
    "omai", "domai", "tomai", "qomai", "zomai"
];

const Aorist1MediaReplacementsJA = [
    "bw", "pw", "фw",
    "bomai", "pomai", "фomai",
];

const Aorist1MediaReplacementsXA = [
    "gw", "kw", "хw", "ssw",
    "gomai", "komai", "xomai", "ssomai"
];

const Aorist1PassiveReplacementsFQH = [
    "фw", "pw", "bw",
    "фomai", "pomai", "bomai",
];

const Aorist1PassiveReplacementsXQH = [
    "хw", "kw", "gw",
    "хomai", "komai", "gomai",
];

const Aorist1PassiveReplacementsSQH = [
    "sw", "tw", "dw", "qw",
    "somai", "tomai", "domai", "qomai",
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
    tense(Tense.AORIST_1, Voice.MEDIA,
        form(Person.FIRST, Singularity.SINGULAR,
            incrementPostfix("samhv", ...Aorist1MediaReplacementsSA),
            incrementPostfix("jamhv", ...Aorist1MediaReplacementsJA),
            incrementPostfix("xamhv", ...Aorist1MediaReplacementsXA),
        ),
        form(Person.FIRST, Singularity.PLURAL,
            incrementPostfix("sameqa", ...Aorist1MediaReplacementsSA),
            incrementPostfix("jameqa", ...Aorist1MediaReplacementsJA),
            incrementPostfix("xameqa", ...Aorist1MediaReplacementsXA),
        ),
        form(Person.SECOND, Singularity.SINGULAR,
            incrementPostfix("sw", ...Aorist1MediaReplacementsSA),
            incrementPostfix("jw", ...Aorist1MediaReplacementsJA),
            incrementPostfix("xw", ...Aorist1MediaReplacementsXA),
        ),
        form(Person.SECOND, Singularity.PLURAL,
            incrementPostfix("sasqe", ...Aorist1MediaReplacementsSA),
            incrementPostfix("jasqe", ...Aorist1MediaReplacementsJA),
            incrementPostfix("xasqe", ...Aorist1MediaReplacementsXA),
        ),
        form(Person.THIRD, Singularity.SINGULAR,
            incrementPostfix("sato", ...Aorist1MediaReplacementsSA),
            incrementPostfix("jato", ...Aorist1MediaReplacementsJA),
            incrementPostfix("xato", ...Aorist1MediaReplacementsXA),
        ),
        form(Person.THIRD, Singularity.PLURAL,
            incrementPostfix("savto", ...Aorist1MediaReplacementsSA),
            incrementPostfix("javto", ...Aorist1MediaReplacementsJA),
            incrementPostfix("xavto", ...Aorist1MediaReplacementsXA),
        ),
    ),
    tense(Tense.AORIST_1, Voice.PASSIVE,
        form(Person.FIRST, Singularity.SINGULAR,
            incrementPostfix("qhv", "w", "omai"),
            incrementPostfix("hv", "w", "omai"),
            incrementPostfix("фqhv", ...Aorist1PassiveReplacementsFQH),
            incrementPostfix("фhv", ...Aorist1PassiveReplacementsFQH),
            incrementPostfix("хqhv", ...Aorist1PassiveReplacementsXQH),
            incrementPostfix("хhv", ...Aorist1PassiveReplacementsXQH),
            incrementPostfix("sqhv", ...Aorist1PassiveReplacementsSQH),
            incrementPostfix("shv", ...Aorist1PassiveReplacementsSQH),
        ),
        form(Person.FIRST, Singularity.PLURAL,
            incrementPostfix("qhmev", "w", "omai"),
            incrementPostfix("hmev", "w", "omai"),
            incrementPostfix("фqhmev", ...Aorist1PassiveReplacementsFQH),
            incrementPostfix("фhmev", ...Aorist1PassiveReplacementsFQH),
            incrementPostfix("хqhmev", ...Aorist1PassiveReplacementsXQH),
            incrementPostfix("хhmev", ...Aorist1PassiveReplacementsXQH),
            incrementPostfix("sqhmev", ...Aorist1PassiveReplacementsSQH),
            incrementPostfix("shmev", ...Aorist1PassiveReplacementsSQH),
        ),
        form(Person.SECOND, Singularity.SINGULAR,
            incrementPostfix("qhc", "w", "omai"),
            incrementPostfix("hc", "w", "omai"),
            incrementPostfix("фqhc", ...Aorist1PassiveReplacementsFQH),
            incrementPostfix("фhc", ...Aorist1PassiveReplacementsFQH),
            incrementPostfix("хqhc", ...Aorist1PassiveReplacementsXQH),
            incrementPostfix("хhc", ...Aorist1PassiveReplacementsXQH),
            incrementPostfix("sqhc", ...Aorist1PassiveReplacementsSQH),
            incrementPostfix("shc", ...Aorist1PassiveReplacementsSQH),
        ),
        form(Person.SECOND, Singularity.PLURAL,
            incrementPostfix("qhte", "w", "omai"),
            incrementPostfix("hte", "w", "omai"),
            incrementPostfix("фqhte", ...Aorist1PassiveReplacementsFQH),
            incrementPostfix("фhte", ...Aorist1PassiveReplacementsFQH),
            incrementPostfix("хqhte", ...Aorist1PassiveReplacementsXQH),
            incrementPostfix("хhte", ...Aorist1PassiveReplacementsXQH),
            incrementPostfix("sqhte", ...Aorist1PassiveReplacementsSQH),
            incrementPostfix("shte", ...Aorist1PassiveReplacementsSQH),
        ),
        form(Person.THIRD, Singularity.SINGULAR,
            incrementPostfix("qh", "w", "omai"),
            incrementPostfix("h", "w", "omai"),
            incrementPostfix("фqh", ...Aorist1PassiveReplacementsFQH),
            incrementPostfix("фh", ...Aorist1PassiveReplacementsFQH),
            incrementPostfix("хqh", ...Aorist1PassiveReplacementsXQH),
            incrementPostfix("хh", ...Aorist1PassiveReplacementsXQH),
            incrementPostfix("sqh", ...Aorist1PassiveReplacementsSQH),
            incrementPostfix("sh", ...Aorist1PassiveReplacementsSQH),
        ),
        form(Person.THIRD, Singularity.PLURAL,
            incrementPostfix("qhsav", "w", "omai"),
            incrementPostfix("hsav", "w", "omai"),
            incrementPostfix("фqhsav", ...Aorist1PassiveReplacementsFQH),
            incrementPostfix("фhsav", ...Aorist1PassiveReplacementsFQH),
            incrementPostfix("хqhsav", ...Aorist1PassiveReplacementsXQH),
            incrementPostfix("хhsav", ...Aorist1PassiveReplacementsXQH),
            incrementPostfix("sqhsav", ...Aorist1PassiveReplacementsSQH),
            incrementPostfix("shsav", ...Aorist1PassiveReplacementsSQH),
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
