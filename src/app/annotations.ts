import {
    ArticleAnnotation,
    CanonicalAware,
    Case,
    Gender,
    GrammarType,
    Mood, NounAnnotation,
    Person,
    Singularity,
    Tense,
    VerbAnnotation,
    Voice
} from "../core/grammar";
import { AnnotatedToken } from "../core/grammar/engine";
import { untransliterate } from "../core/transliteration";
import { Token } from "../core/scanning";

export function buildGendersHtml(genders: Gender[]) {
    let result: string[] = [];
    for (const gender of genders) {
        result.push(buildGenderHtml(gender));
    }
    return result.join(", ");
}

export function buildGenderHtml(gender: Gender) {
    switch (gender) {
        case Gender.FEMININE:
            return "<attr title='мужской род'>м.р.</attr>";
        case Gender.MASCULINE:
            return "<attr title='женский род'>ж.р.</attr>";
        case Gender.NEUTER:
            return "<attr title='средний род'>ср.р.</attr>";
    }
    return "";
}

export function buildCasesHtml(cases: Case[]) {
    let result: string[] = [];
    for (const caseAnnotation of cases) {
        result.push(buildCaseHtml(caseAnnotation))
    }
    return result.join(", ");
}

export function buildCaseHtml(caseAnnotation: Case) {
    switch (caseAnnotation) {
        case Case.NOMINATIVE:
            return "<attr title='Именительный падеж'>И.п.</attr>";
        case Case.GENITIVE:
            return "<attr title='Родительный падеж (обладание, принадлежность)'>Р.п.</attr>";
        case Case.DATIVE:
            return "<attr title='Дательный падеж (косвенное дополнение)'>Д.п.</attr>";
        case Case.ACCUSATIVE:
            return "<attr title='Творительный падеж (прямое дополнение)'>Т.п.</attr>";
        case Case.VOCATIVE:
            return "<attr title='Звательный падеж'>Зв.п.</attr>";
    }
    return "";
}

export function buildSingularityHtml(singularity: Singularity) {
    switch (singularity) {
        case Singularity.SINGULAR:
            return "<attr title='единственное число'>ед.ч.</attr>";
        case Singularity.PLURAL:
            return "<attr title='множественное число'>мн.ч.</attr>";
    }
    return "";
}

export function buildTenseHtml(tense: Tense) {
    switch (tense) {
        case Tense.PRESENT:
            return "<attr title='настоящее время'>наст.вр.</attr>";
    }
    return "";
}

export function buildMoodHtml(mood: Mood) {
    switch (mood) {
        case Mood.INDICATIVE:
            return "";
    }
    return "";
}

export function buildVoiceHtml(voice: Voice) {
    switch (voice) {
        case Voice.ACTIVE:
            return "<attr title='активный залог'>акт.</attr>";
    }
    return "";
}

export function buildPersonHtml(person: Person) {
    switch (person) {
        case Person.FIRST:
            return "<attr title='1-е лицо (я/мы)'>1 л.</attr>";
        case Person.SECOND:
            return "<attr title='2-е лицо (ты/вы)'>2 л.</attr>";
        case Person.THIRD:
            return "<attr title='3-е лицо (он/они)'>3 л.</attr>";
    }
    return "";
}

export function buildArticleAnnotationHtml(token: Token, annotation: ArticleAnnotation) {
    return "<p><span class='badge badge-light'>Арт</span> "
        + `<small>${buildGendersHtml(annotation.gender)}; ${buildCasesHtml(annotation.case)}; ${buildSingularityHtml(annotation.singularity)}</small> `
        + buildCanonicalSearchLinksHtml(annotation, token.transliterated)
        + "</p>";
}

export function buildVerbAnnotationHtml(token: Token, annotation: VerbAnnotation) {
    return "<p><span class='badge badge-danger'>Глаг.</span> "
        + `<small>${buildMoodHtml(annotation.mood)}; ${buildVoiceHtml(annotation.voice)}; ${buildTenseHtml(annotation.tense)}; ${buildPersonHtml(annotation.person)}; ${buildSingularityHtml(annotation.singularity)}</small> `
        + buildCanonicalSearchLinksHtml(annotation, token.transliterated)
        + "</p>";
}

export function buildNounAnnotationHtml(token: Token, annotation: NounAnnotation) {
    return "<p><span class='badge badge-success'>Сущ</span> "
        + `<small>${buildGendersHtml(annotation.gender)}; ${buildCasesHtml(annotation.case)}; ${buildSingularityHtml(annotation.singularity)}</small> `
        + buildCanonicalSearchLinksHtml(annotation, token.transliterated)
        + "</p>";
}

export function buildGrammarAnnotationsHtml(token: AnnotatedToken) {
    let content = "";

    for (const annotation of token.annotations) {
        if (annotation.type === GrammarType.ARTICLE) {
            content += buildArticleAnnotationHtml(token.token, annotation);
        } else if (annotation.type === GrammarType.NOUN) {
            content += buildNounAnnotationHtml(token.token, annotation);
        } else if (annotation.type === GrammarType.VERB) {
            content += buildVerbAnnotationHtml(token.token, annotation);
        }
    }

    return content;
}

export function buildCanonicalSearchLinksHtml(annotation: CanonicalAware, exclude: string = "") {
    const result: string[] = [];
    for (const canonical of annotation.canonical) {
        if (canonical === exclude) {
            continue;
        }
        result.push(buildSearchLinksHtml(untransliterate(canonical), "secondary"));
    }
    return result.join(" ");
}

export function buildSearchLinksHtml(greek: string, look: string = "primary") {
    return `<a class="btn btn-outline-${look} btn-sm" href="search.html?q=${greek}" target="_blank">${greek} &rarr;</a>`;
}
