import {CanonicalTransformation, Case, Gender, GrammarType, Singularity, Tense, Voice} from "./index";
import {register} from "./registry";


tense(Tense.PRESENT, Voice.ACTIVE,
    gender(Gender.MASCULINE, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.VOCATIVE], "wv", "w", "omai"),
        form([Case.GENITIVE], "ovtoc", "w", "omai"),
        form([Case.DATIVE], "ovti", "w", "omai"),
        form([Case.ACCUSATIVE], "ovta", "w", "omai"),
    ),
    gender(Gender.MASCULINE, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.VOCATIVE], "ovtec", "w", "omai"),
        form([Case.GENITIVE], "ovtwv", "w", "omai"),
        form([Case.DATIVE], "ousi", "w", "omai"),
        form([Case.DATIVE], "ousiv", "w", "omai"),
        form([Case.ACCUSATIVE], "ovtac", "w", "omai"),
    ),
    gender(Gender.FEMININE, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.VOCATIVE], "ousa", "w", "omai"),
        form([Case.GENITIVE], "oushc", "w", "omai"),
        form([Case.DATIVE], "oush/", "w", "omai"),
        form([Case.ACCUSATIVE], "ousav", "w", "omai"),
    ),
    gender(Gender.FEMININE, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.VOCATIVE], "ousai", "w", "omai"),
        form([Case.GENITIVE], "ouswv", "w", "omai"),
        form([Case.DATIVE], "ousaic", "w", "omai"),
        form([Case.ACCUSATIVE], "ousac", "w", "omai"),
    ),
    gender(Gender.NEUTER, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE], "ov", "w", "omai"),
        form([Case.GENITIVE], "ovtoc", "w", "omai"),
        form([Case.DATIVE], "ovti", "w", "omai"),
    ),
    gender(Gender.NEUTER, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE], "ovta", "w"),
        form([Case.GENITIVE], "ovtwv", "w", "omai"),
        form([Case.DATIVE], "ousi", "w", "omai"),
        form([Case.DATIVE], "ousiv", "w", "omai"),
    ),
);

tense(Tense.PRESENT, Voice.MEDIA_PASSIVE,
    gender(Gender.MASCULINE, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.VOCATIVE], "omevoc", "w", "omai"),
        form([Case.GENITIVE], "omevou", "w", "omai"),
        form([Case.DATIVE], "omevw/", "w", "omai"),
        form([Case.ACCUSATIVE], "omevov", "w", "omai"),
    ),
    gender(Gender.MASCULINE, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.VOCATIVE], "omevoi", "w", "omai"),
        form([Case.GENITIVE], "omevwv", "w", "omai"),
        form([Case.DATIVE], "omevoic", "w", "omai"),
        form([Case.ACCUSATIVE], "omevouc", "w", "omai"),
    ),
    gender(Gender.FEMININE, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.VOCATIVE], "omevh", "w", "omai"),
        form([Case.GENITIVE], "omevhc", "w", "omai"),
        form([Case.DATIVE], "omevh/", "w", "omai"),
        form([Case.ACCUSATIVE], "omevhv", "w", "omai"),
    ),
    gender(Gender.FEMININE, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.VOCATIVE], "omevai", "w", "omai"),
        form([Case.GENITIVE], "omevwv", "w", "omai"),
        form([Case.DATIVE], "omevaic", "w", "omai"),
        form([Case.ACCUSATIVE], "omevac", "w", "omai"),
    ),
    gender(Gender.NEUTER, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE], "omevov", "w", "omai"),
        form([Case.GENITIVE], "omevou", "w", "omai"),
        form([Case.DATIVE], "omevw/", "w", "omai"),
    ),
    gender(Gender.NEUTER, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE], "omeva", "w", "omai"),
        form([Case.GENITIVE], "omevwv", "w", "omai"),
        form([Case.DATIVE], "omevoic", "w", "omai"),
    ),
);

tense(Tense.AORIST_1, Voice.ACTIVE,
    gender(Gender.MASCULINE, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.VOCATIVE], "sac", "w", "omai"),
        form([Case.GENITIVE], "savtoc", "w", "omai"),
        form([Case.DATIVE], "savti", "w", "omai"),
        form([Case.ACCUSATIVE], "savta", "w", "omai"),
    ),
    gender(Gender.MASCULINE, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.VOCATIVE], "savtec", "w", "omai"),
        form([Case.GENITIVE], "savtwv", "w", "omai"),
        form([Case.DATIVE], "sasi", "w", "omai"),
        form([Case.DATIVE], "sasiv", "w", "omai"),
        form([Case.ACCUSATIVE], "savtac", "w", "omai"),
    ),
    gender(Gender.FEMININE, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.VOCATIVE], "sasa", "w", "omai"),
        form([Case.GENITIVE], "sashc", "w", "omai"),
        form([Case.DATIVE], "sash/", "w", "omai"),
        form([Case.ACCUSATIVE], "sasav", "w", "omai"),
    ),
    gender(Gender.FEMININE, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.VOCATIVE], "sasai", "w", "omai"),
        form([Case.GENITIVE], "saswv", "w", "omai"),
        form([Case.DATIVE], "sasaic", "w", "omai"),
        form([Case.ACCUSATIVE], "sasac", "w", "omai"),
    ),
    gender(Gender.NEUTER, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE], "sav", "w", "omai"),
        form([Case.GENITIVE], "savtoc", "w", "omai"),
        form([Case.DATIVE], "savti", "w", "omai"),
    ),
    gender(Gender.NEUTER, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE], "savta", "w", "omai"),
        form([Case.GENITIVE], "savtwv", "w", "omai"),
        form([Case.DATIVE], "sasi", "w", "omai"),
        form([Case.DATIVE], "sasiv", "w", "omai"),
    ),
);

tense(Tense.AORIST_1, Voice.MEDIA,
    gender(Gender.MASCULINE, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.VOCATIVE], "samevoc", "w", "omai"),
        form([Case.GENITIVE], "samevou", "w", "omai"),
        form([Case.DATIVE], "samevw/", "w", "omai"),
        form([Case.ACCUSATIVE], "samevov", "w", "omai"),
    ),
    gender(Gender.MASCULINE, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.VOCATIVE], "samevoi", "w", "omai"),
        form([Case.GENITIVE], "samevwv", "w", "omai"),
        form([Case.DATIVE], "samevoic", "w", "omai"),
        form([Case.ACCUSATIVE], "samevouc", "w", "omai"),
    ),
    gender(Gender.FEMININE, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.VOCATIVE], "samevh", "w", "omai"),
        form([Case.GENITIVE], "samevhc", "w", "omai"),
        form([Case.DATIVE], "samevh/", "w", "omai"),
        form([Case.ACCUSATIVE], "samevhv", "w", "omai"),
    ),
    gender(Gender.FEMININE, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.VOCATIVE], "samevai", "w", "omai"),
        form([Case.GENITIVE], "samevwv", "w", "omai"),
        form([Case.DATIVE], "samevaic", "w", "omai"),
        form([Case.ACCUSATIVE], "samevac", "w", "omai"),
    ),
    gender(Gender.NEUTER, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE], "samevov", "w", "omai"),
        form([Case.GENITIVE], "samevou", "w", "omai"),
        form([Case.DATIVE], "samevw/", "w", "omai"),
    ),
    gender(Gender.NEUTER, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE], "sameva", "w", "omai"),
        form([Case.GENITIVE], "samevwv", "w", "omai"),
        form([Case.DATIVE], "samevoic", "w", "omai"),
        form([Case.DATIVE], "sameva", "w", "omai"),
    ),
);

tense(Tense.AORIST_2, Voice.ACTIVE,
    gender(Gender.MASCULINE, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.VOCATIVE], "wv", "w-", "omai-"),
        form([Case.GENITIVE], "ovtoc", "w-", "omai-"),
        form([Case.DATIVE], "ovti", "w-", "omai-"),
        form([Case.ACCUSATIVE], "ovta", "w-", "omai-"),
    ),
    gender(Gender.MASCULINE, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.VOCATIVE], "ovtec", "w-", "omai-"),
        form([Case.GENITIVE], "ovtwv", "w-", "omai-"),
        form([Case.DATIVE], "ousi", "w-", "omai-"),
        form([Case.DATIVE], "ousiv", "w-", "omai-"),
        form([Case.ACCUSATIVE], "ovtac", "w-", "omai-"),
    ),
    gender(Gender.FEMININE, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.VOCATIVE], "ousa", "w-", "omai-"),
        form([Case.GENITIVE], "oushc", "w-", "omai-"),
        form([Case.DATIVE], "oush/", "w-", "omai-"),
        form([Case.ACCUSATIVE], "ousav", "w-", "omai-"),
    ),
    gender(Gender.FEMININE, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.VOCATIVE], "ousai", "w-", "omai-"),
        form([Case.GENITIVE], "ouswv", "w-", "omai-"),
        form([Case.DATIVE], "ousaic", "w-", "omai-"),
        form([Case.ACCUSATIVE], "ousac", "w-", "omai-"),
    ),
    gender(Gender.NEUTER, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE], "ov", "w-", "omai-"),
        form([Case.GENITIVE], "ovtoc", "w-", "omai-"),
        form([Case.DATIVE], "ovti", "w-", "omai-"),
    ),
    gender(Gender.NEUTER, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE], "ovta", "w-", "omai-"),
        form([Case.GENITIVE], "ovtwv", "w-", "omai-"),
        form([Case.DATIVE], "ousi", "w-", "omai-"),
        form([Case.DATIVE], "ousiv", "w-", "omai-"),
    ),
);

tense(Tense.AORIST_2, Voice.MEDIA,
    gender(Gender.MASCULINE, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.VOCATIVE], "omevoc", "w-", "omai-"),
        form([Case.GENITIVE], "omevou", "w-", "omai-"),
        form([Case.DATIVE], "omevw/", "w-", "omai-"),
        form([Case.ACCUSATIVE], "omevov", "w-", "omai-"),
    ),
    gender(Gender.MASCULINE, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.VOCATIVE], "omevoi", "w-", "omai-"),
        form([Case.GENITIVE], "omevwv", "w-", "omai-"),
        form([Case.DATIVE], "omevoic", "w-", "omai-"),
        form([Case.ACCUSATIVE], "omevouc", "w-", "omai-"),
    ),
    gender(Gender.FEMININE, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.VOCATIVE], "omevh", "w-", "omai-"),
        form([Case.GENITIVE], "omevhc", "w-", "omai-"),
        form([Case.DATIVE], "omevh/", "w-", "omai-"),
        form([Case.ACCUSATIVE], "omevhv", "w-", "omai-"),
    ),
    gender(Gender.FEMININE, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.VOCATIVE], "omevai", "w-", "omai-"),
        form([Case.GENITIVE], "omevwv", "w-", "omai-"),
        form([Case.DATIVE], "omevaic", "w-", "omai-"),
        form([Case.ACCUSATIVE], "omevac", "w-", "omai-"),
    ),
    gender(Gender.NEUTER, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE], "omevov", "w-", "omai-"),
        form([Case.GENITIVE], "omevou", "w-", "omai-"),
        form([Case.DATIVE], "omevw/", "w-", "omai-"),
    ),
    gender(Gender.NEUTER, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE], "omeva", "w-", "omai-"),
        form([Case.GENITIVE], "omevwv", "w-", "omai-"),
        form([Case.DATIVE], "omevoic", "w-", "omai-"),
    ),
);

tense(Tense.AORIST_1, Voice.PASSIVE,
    gender(Gender.MASCULINE, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.VOCATIVE], "qeic", "w", "omai"),
        form([Case.GENITIVE], "qevtoc", "w", "omai"),
        form([Case.DATIVE], "qevti", "w", "omai"),
        form([Case.ACCUSATIVE], "qevta", "w", "omai"),
    ),
    gender(Gender.MASCULINE, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.VOCATIVE], "qevtec", "w", "omai"),
        form([Case.GENITIVE], "qevtwv", "w", "omai"),
        form([Case.DATIVE], "qeisi", "w", "omai"),
        form([Case.DATIVE], "qeisiv", "w", "omai"),
        form([Case.ACCUSATIVE], "qevtac", "w", "omai"),
    ),
    gender(Gender.FEMININE, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.VOCATIVE], "qeisa", "w", "omai"),
        form([Case.GENITIVE], "qeishc", "w", "omai"),
        form([Case.DATIVE], "qeish/", "w", "omai"),
        form([Case.ACCUSATIVE], "qeisav", "w", "omai"),
    ),
    gender(Gender.FEMININE, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.VOCATIVE], "qeisai", "w", "omai"),
        form([Case.GENITIVE], "qeiswv", "w", "omai"),
        form([Case.DATIVE], "qeisaic", "w", "omai"),
        form([Case.ACCUSATIVE], "qeisac", "w", "omai"),
    ),
    gender(Gender.NEUTER, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE], "qev", "w", "omai"),
        form([Case.GENITIVE], "qevtoc", "w", "omai"),
        form([Case.DATIVE], "qevti", "w", "omai"),
    ),
    gender(Gender.NEUTER, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE], "qevta", "w", "omai"),
        form([Case.GENITIVE], "qevtwv", "w", "omai"),
        form([Case.DATIVE], "qeisi", "w", "omai"),
        form([Case.DATIVE], "qeisiv", "w", "omai"),
    ),
);

tense(Tense.AORIST_2, Voice.PASSIVE,
    gender(Gender.MASCULINE, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.VOCATIVE], "eic", "w-", "omai-"),
        form([Case.GENITIVE], "evtoc", "w-", "omai-"),
        form([Case.DATIVE], "evti", "w-", "omai-"),
        form([Case.ACCUSATIVE], "evta", "w-", "omai-"),
    ),
    gender(Gender.MASCULINE, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.VOCATIVE], "evtec", "w-", "omai-"),
        form([Case.GENITIVE], "evtwv", "w-", "omai-"),
        form([Case.DATIVE], "eisi", "w-", "omai-"),
        form([Case.DATIVE], "eisiv", "w-", "omai-"),
        form([Case.ACCUSATIVE], "evtac", "w-", "omai-"),
    ),
    gender(Gender.FEMININE, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.VOCATIVE], "eisa", "w-", "omai-"),
        form([Case.GENITIVE], "eishc", "w-", "omai-"),
        form([Case.DATIVE], "eish/", "w-", "omai-"),
        form([Case.ACCUSATIVE], "eisav", "w-", "omai-"),
    ),
    gender(Gender.FEMININE, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.VOCATIVE], "eisai", "w-", "omai-"),
        form([Case.GENITIVE], "eiswv", "w-", "omai-"),
        form([Case.DATIVE], "eisaic", "w-", "omai-"),
        form([Case.ACCUSATIVE], "eisac", "w-", "omai-"),
    ),
    gender(Gender.NEUTER, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE], "ev", "w-", "omai-"),
        form([Case.GENITIVE], "evtoc", "w-", "omai-"),
        form([Case.DATIVE], "evti", "w-", "omai-"),
    ),
    gender(Gender.NEUTER, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE], "evta", "w-", "omai-"),
        form([Case.GENITIVE], "evtwv", "w-", "omai-"),
        form([Case.DATIVE], "eisi", "w-", "omai-"),
        form([Case.DATIVE], "eisiv", "w-", "omai-"),
    ),
);



//===================================================================================
//  UTILS
//===================================================================================

interface CasesForm {
    cases: Case[];
    form: string;
    transformations: CanonicalTransformation[];
}

interface GenderForm {
    caseForms: CasesForm[];
    gender: Gender;
    singularity: Singularity;
}

function form(cases: Case[], postfix: string, ...replacements: string[]): CasesForm {
    return {
        cases,
        form: postfix,
        transformations: replacements.map(replacement => ({ original: postfix, replacement })),
    };
}

function gender(gender: Gender, singularity: Singularity, ...caseForms: CasesForm[]): GenderForm {
    return { gender, singularity, caseForms };
}

function tense(tense: Tense, voice: Voice, ...genderForms: GenderForm[]) {
    for (const genderForm of genderForms) {
        for (const caseForm of genderForm.caseForms) {
            register(caseForm.form, {
                type: GrammarType.PARTICIPLE,
                tense,
                voice,
                singularity: genderForm.singularity,
                gender: genderForm.gender,
                case: caseForm.cases,
                canonical: [],
                canonicalTransformations: caseForm.transformations,
            });
        }
    }
}


