import {CanonicalTransformation, Case, Gender, GrammarType, Singularity, Tense, Voice} from "./index";
import {register} from "./registry";


tense(Tense.PRESENT, Voice.ACTIVE,
    gender(Gender.MASCULINE, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.VOCATIVE], "wv", "w"),
        form([Case.GENITIVE], "ovtoc", "w"),
        form([Case.DATIVE], "ovti", "w"),
        form([Case.ACCUSATIVE], "ovta", "w"),
    ),
    gender(Gender.MASCULINE, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.VOCATIVE], "ovtec", "w"),
        form([Case.GENITIVE], "ovtwv", "w"),
        form([Case.DATIVE], "ousi", "w"),
        form([Case.DATIVE], "ousiv", "w"),
        form([Case.ACCUSATIVE], "ovtac", "w"),
    ),
    gender(Gender.FEMININE, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.VOCATIVE], "ousa", "w"),
        form([Case.GENITIVE], "oushc", "w"),
        form([Case.DATIVE], "oush/", "w"),
        form([Case.ACCUSATIVE], "ousav", "w"),
    ),
    gender(Gender.FEMININE, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.VOCATIVE], "ousai", "w"),
        form([Case.GENITIVE], "ouswv", "w"),
        form([Case.DATIVE], "ousaic", "w"),
        form([Case.ACCUSATIVE], "ousac", "w"),
    ),
    gender(Gender.NEUTER, Singularity.SINGULAR,
        form([Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE], "ov", "w"),
        form([Case.GENITIVE], "ovtoc", "w"),
        form([Case.DATIVE], "ovti", "w"),
    ),
    gender(Gender.NEUTER, Singularity.PLURAL,
        form([Case.NOMINATIVE, Case.ACCUSATIVE, Case.VOCATIVE], "ovta", "w"),
        form([Case.GENITIVE], "ovtwv", "w"),
        form([Case.DATIVE], "ousi", "w"),
        form([Case.DATIVE], "ousiv", "w"),
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


