import {GrammarType, Mood, Person, Singularity, Tense, Voice} from "./index";
import {register} from "./registry";

toBe(Mood.INDICATIVE,
    tense(Tense.PRESENT, Voice.ACTIVE,
        form(Person.FIRST, Singularity.SINGULAR, "$eimi"),
        form(Person.FIRST, Singularity.PLURAL, "$esmev"),
        form(Person.SECOND, Singularity.SINGULAR, "$ei"),
        form(Person.SECOND, Singularity.PLURAL, "$este"),
        form(Person.THIRD, Singularity.SINGULAR, "$esti", "$estiv"),
        form(Person.THIRD, Singularity.PLURAL, "$eisi", "$eisiv"),
    ),
    tense(Tense.IMPERFECT, Voice.ACTIVE,
        form(Person.FIRST, Singularity.SINGULAR, "$hmhv"),
        form(Person.FIRST, Singularity.PLURAL, "$hmev"),
        form(Person.SECOND, Singularity.SINGULAR, "$hc"),
        form(Person.SECOND, Singularity.PLURAL, "$hte"),
        form(Person.THIRD, Singularity.SINGULAR, "$hv"),
        form(Person.THIRD, Singularity.PLURAL, "$hsav"),
    ),
);

interface ToBePersonForm {
    forms: string[];
    person: Person;
    singularity: Singularity;
}

interface ToBeTenseForm {
    tense: Tense;
    voice: Voice;
    forms: ToBePersonForm[];
}

function form(person: Person, singularity: Singularity, ...forms: string[]): ToBePersonForm {
    return { forms, person, singularity };
}


function tense(tense: Tense, voice: Voice, ...forms: ToBePersonForm[]): ToBeTenseForm {
    return { tense, voice, forms };
}

function toBe(mood: Mood, ...tenseForms: ToBeTenseForm[]) {
    for (const tenseForm of tenseForms) {
        for (const personForm of tenseForm.forms) {
            for (const form of personForm.forms) {
                register(form, {
                    type: GrammarType.VERB,
                    tense: tenseForm.tense,
                    voice: tenseForm.voice,
                    person: personForm.person,
                    singularity: personForm.singularity,
                    canonical: ["eimi"],
                    canonicalTransformations: [],
                    mood,
                });
            }
        }
    }
}
