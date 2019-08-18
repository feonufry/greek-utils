import {register} from "./registry";
import {CanonicalTransformation, GrammarType, Mood, Person, Singularity, Tense, Voice} from "./index";

const Aorist1ReplacementsSA = [
    "w", "dw", "tw", "qw", "zw",
    "omai", "domai", "tomai", "qomai", "zomai"
];

const Aorist1ReplacementsJA = [
    "bw", "pw", "фw",
    "bomai", "pomai", "фomai",
];

const Aorist1ReplacementsXA = [
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
        form(Person.FIRST, Singularity.PLURAL, postfix("omev", "w", "omai")),
        form(Person.SECOND, Singularity.SINGULAR, postfix("eic",  "w", "omai")),
        form(Person.SECOND, Singularity.PLURAL, postfix("ete", "w", "omai")),
        form(Person.THIRD, Singularity.SINGULAR, postfix("ei",  "w", "omai")),
        form(Person.THIRD, Singularity.PLURAL,
            postfix("ousi", "w", "omai"),
            postfix("ousiv", "w", "omai"),
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
        form(Person.FIRST, Singularity.SINGULAR, incrementPostfix("ov", "w", "omai")),
        form(Person.FIRST, Singularity.PLURAL, incrementPostfix("omev", "w", "omai")),
        form(Person.SECOND, Singularity.SINGULAR, incrementPostfix("ec", "w", "omai")),
        form(Person.SECOND, Singularity.PLURAL, incrementPostfix("ete", "w", "omai")),
        form(Person.THIRD, Singularity.SINGULAR,
            incrementPostfix("e", "w", "omai"),
            incrementPostfix("ev", "w", "omai"),
        ),
        form(Person.THIRD, Singularity.PLURAL, incrementPostfix("ov", "w", "omai")),
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
            incrementPostfix("sa", ...Aorist1ReplacementsSA),
            incrementPostfix("ja", ...Aorist1ReplacementsJA),
            incrementPostfix("xa", ...Aorist1ReplacementsXA),
        ),
        form(Person.FIRST, Singularity.PLURAL,
            incrementPostfix("samev", ...Aorist1ReplacementsSA),
            incrementPostfix("jamev", ...Aorist1ReplacementsJA),
            incrementPostfix("xamev", ...Aorist1ReplacementsXA),
        ),
        form(Person.SECOND, Singularity.SINGULAR,
            incrementPostfix("sac", ...Aorist1ReplacementsSA),
            incrementPostfix("jac", ...Aorist1ReplacementsJA),
            incrementPostfix("xac", ...Aorist1ReplacementsXA),
        ),
        form(Person.SECOND, Singularity.PLURAL,
            incrementPostfix("sate", ...Aorist1ReplacementsSA),
            incrementPostfix("jate", ...Aorist1ReplacementsJA),
            incrementPostfix("xate", ...Aorist1ReplacementsXA),
        ),
        form(Person.THIRD, Singularity.SINGULAR,
            incrementPostfix("se", ...Aorist1ReplacementsSA),
            incrementPostfix("je", ...Aorist1ReplacementsJA),
            incrementPostfix("xe", ...Aorist1ReplacementsXA),
            incrementPostfix("sev", ...Aorist1ReplacementsSA),
            incrementPostfix("jev", ...Aorist1ReplacementsJA),
            incrementPostfix("xev", ...Aorist1ReplacementsXA),
        ),
        form(Person.THIRD, Singularity.PLURAL,
            incrementPostfix("sav", ...Aorist1ReplacementsSA),
            incrementPostfix("jav", ...Aorist1ReplacementsJA),
            incrementPostfix("xav", ...Aorist1ReplacementsXA),
        ),
    ),
    tense(Tense.AORIST_1, Voice.MEDIA,
        form(Person.FIRST, Singularity.SINGULAR,
            incrementPostfix("samhv", ...Aorist1ReplacementsSA),
            incrementPostfix("jamhv", ...Aorist1ReplacementsJA),
            incrementPostfix("xamhv", ...Aorist1ReplacementsXA),
        ),
        form(Person.FIRST, Singularity.PLURAL,
            incrementPostfix("sameqa", ...Aorist1ReplacementsSA),
            incrementPostfix("jameqa", ...Aorist1ReplacementsJA),
            incrementPostfix("xameqa", ...Aorist1ReplacementsXA),
        ),
        form(Person.SECOND, Singularity.SINGULAR,
            incrementPostfix("sw", ...Aorist1ReplacementsSA),
            incrementPostfix("jw", ...Aorist1ReplacementsJA),
            incrementPostfix("xw", ...Aorist1ReplacementsXA),
        ),
        form(Person.SECOND, Singularity.PLURAL,
            incrementPostfix("sasqe", ...Aorist1ReplacementsSA),
            incrementPostfix("jasqe", ...Aorist1ReplacementsJA),
            incrementPostfix("xasqe", ...Aorist1ReplacementsXA),
        ),
        form(Person.THIRD, Singularity.SINGULAR,
            incrementPostfix("sato", ...Aorist1ReplacementsSA),
            incrementPostfix("jato", ...Aorist1ReplacementsJA),
            incrementPostfix("xato", ...Aorist1ReplacementsXA),
        ),
        form(Person.THIRD, Singularity.PLURAL,
            incrementPostfix("savto", ...Aorist1ReplacementsSA),
            incrementPostfix("javto", ...Aorist1ReplacementsJA),
            incrementPostfix("xavto", ...Aorist1ReplacementsXA),
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
    tense(Tense.AORIST_2, Voice.ACTIVE,
        form(Person.FIRST, Singularity.SINGULAR, incrementPostfix("ov", "w-", "omai-")),
        form(Person.FIRST, Singularity.PLURAL, incrementPostfix("omev", "w-", "omai-")),
        form(Person.SECOND, Singularity.SINGULAR, incrementPostfix("ec", "w-", "omai-")),
        form(Person.SECOND, Singularity.PLURAL, incrementPostfix("ete", "w-", "omai-")),
        form(Person.THIRD, Singularity.SINGULAR,
            incrementPostfix("e", "w-", "omai-"),
            incrementPostfix("ev", "w-", "omai-"),
        ),
        form(Person.THIRD, Singularity.PLURAL, incrementPostfix("ov", "w-", "omai-")),
    ),
    tense(Tense.AORIST_2, Voice.MEDIA,
        form(Person.FIRST, Singularity.SINGULAR, incrementPostfix("omhv", "w-", "omai-")),
        form(Person.FIRST, Singularity.PLURAL, incrementPostfix("omeqa", "w-", "omai-")),
        form(Person.SECOND, Singularity.SINGULAR, incrementPostfix("ou", "w-", "omai-")),
        form(Person.SECOND, Singularity.PLURAL, incrementPostfix("esqe", "w-", "omai-")),
        form(Person.THIRD, Singularity.SINGULAR, incrementPostfix("eto", "w-", "omai-")),
        form(Person.THIRD, Singularity.PLURAL, incrementPostfix("ovto", "w-", "omai-")),
    ),
    tense(Tense.AORIST_2, Voice.PASSIVE,
        form(Person.FIRST, Singularity.SINGULAR, incrementPostfix("hv", "w", "omai")),
        form(Person.FIRST, Singularity.PLURAL, incrementPostfix("hmev", "w", "omai")),
        form(Person.SECOND, Singularity.SINGULAR, incrementPostfix("hc", "w", "omai")),
        form(Person.SECOND, Singularity.PLURAL, incrementPostfix("hte", "w", "omai")),
        form(Person.THIRD, Singularity.SINGULAR, incrementPostfix("h", "w", "omai")),
        form(Person.THIRD, Singularity.PLURAL, incrementPostfix("hsav", "w", "omai")),
    ),
);

mood(Mood.INDICATIVE,
    tense(Tense.PRESENT, Voice.ACTIVE,
        form(Person.FIRST, Singularity.SINGULAR, postfix("w")),
        form(Person.FIRST, Singularity.PLURAL, postfix("wmev", "w", "omai")),
        form(Person.SECOND, Singularity.SINGULAR, postfix("h/ic",  "w", "omai")),
        form(Person.SECOND, Singularity.PLURAL, postfix("hte", "w", "omai")),
        form(Person.THIRD, Singularity.SINGULAR, postfix("h/",  "w", "omai")),
        form(Person.THIRD, Singularity.PLURAL,
            postfix("wsi", "w", "omai"),
            postfix("wsiv", "w", "omai"),
        ),
    ),
    tense(Tense.PRESENT, Voice.MEDIA_PASSIVE,
        form(Person.FIRST, Singularity.SINGULAR, postfix("wmai", "w", "omai")),
        form(Person.FIRST, Singularity.PLURAL, postfix("wmeqa", "w", "omai")),
        form(Person.SECOND, Singularity.SINGULAR, postfix("h/", "w", "omai")),
        form(Person.SECOND, Singularity.PLURAL, postfix("hsqe", "w", "omai")),
        form(Person.THIRD, Singularity.SINGULAR, postfix("htai", "w", "omai")),
        form(Person.THIRD, Singularity.PLURAL, postfix("wvtai", "w", "omai")),
    ),
    tense(Tense.AORIST_1, Voice.ACTIVE,
        form(Person.FIRST, Singularity.SINGULAR, postfix("sw", "w", "omai")),
        form(Person.FIRST, Singularity.PLURAL, postfix("swmev", "w", "omai")),
        form(Person.SECOND, Singularity.SINGULAR, postfix("sh/c", "w", "omai")),
        form(Person.SECOND, Singularity.PLURAL, postfix("shte", "w", "omai")),
        form(Person.THIRD, Singularity.SINGULAR, postfix("sh/", "w", "omai")),
        form(Person.THIRD, Singularity.PLURAL, postfix("swsi", "w", "omai")),
        form(Person.THIRD, Singularity.PLURAL, postfix("swsiv", "w", "omai")),
    ),
    tense(Tense.AORIST_1, Voice.MEDIA,
        form(Person.FIRST, Singularity.SINGULAR, postfix("swmai", "w", "omai")),
        form(Person.FIRST, Singularity.PLURAL, postfix("swmeqa", "w", "omai")),
        form(Person.SECOND, Singularity.SINGULAR, postfix("sh/", "w", "omai")),
        form(Person.SECOND, Singularity.PLURAL, postfix("shsqe", "w", "omai")),
        form(Person.THIRD, Singularity.SINGULAR, postfix("shtai", "w", "omai")),
        form(Person.THIRD, Singularity.PLURAL, postfix("swvtai", "w", "omai")),
    ),
    tense(Tense.AORIST_1, Voice.PASSIVE,
        form(Person.FIRST, Singularity.SINGULAR, postfix("qw", "w", "omai")),
        form(Person.FIRST, Singularity.PLURAL, postfix("qwmev", "w", "omai")),
        form(Person.SECOND, Singularity.SINGULAR, postfix("qh/c", "w", "omai")),
        form(Person.SECOND, Singularity.PLURAL, postfix("qhte", "w", "omai")),
        form(Person.THIRD, Singularity.SINGULAR, postfix("qh/", "w", "omai")),
        form(Person.THIRD, Singularity.PLURAL, postfix("qwsi", "w", "omai")),
        form(Person.THIRD, Singularity.PLURAL, postfix("qwsiv", "w", "omai")),
    ),
    tense(Tense.AORIST_2, Voice.ACTIVE,
        form(Person.FIRST, Singularity.SINGULAR, postfix("w", "w-", "omai-")),
        form(Person.FIRST, Singularity.PLURAL, postfix("wmev", "w-", "omai-")),
        form(Person.SECOND, Singularity.SINGULAR, postfix("h/ic",  "w-", "omai-")),
        form(Person.SECOND, Singularity.PLURAL, postfix("hte", "w-", "omai-")),
        form(Person.THIRD, Singularity.SINGULAR, postfix("h/",  "w-", "omai-")),
        form(Person.THIRD, Singularity.PLURAL,
            postfix("wsi", "w-", "omai-"),
            postfix("wsiv", "w-", "omai-"),
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
