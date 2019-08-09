import {
    ArticleAnnotation,
    CanonicalAware,
    Case,
    Gender,
    GrammarType,
    Mood, NounAnnotation, ParticipleAnnotation, ParticleAnnotation,
    Person,
    Singularity,
    Tense,
    VerbAnnotation, VocabularyEntry, VocabularyEntryDescription,
    Voice
} from "../core/grammar";
import { AnnotatedToken } from "../core/grammar/engine";
import { untransliterate } from "../core/transliteration";
import { Token } from "../core/scanning";

export function buildTypeHtml(type: GrammarType) {
    switch (type) {
        case GrammarType.ARTICLE:
            return "<span class='badge badge-light'>Арт</span>";
        case GrammarType.VERB:
            return "<span class='badge badge-danger'>Глаг</span>";
        case GrammarType.NOUN:
            return "<span class='badge badge-success'>Сущ</span>";
        case GrammarType.ADJECTIVE:
            return "<span class='badge badge-success'>Прил</span>";
        case GrammarType.PRONOUN:
            return "<span class='badge badge-warning'>Мест</span>";
        case GrammarType.ADVERB:
            return "<span class='badge badge-secondary'>Нареч</span>";
        case GrammarType.PREPOSITION:
            return "<span class='badge badge-info'>Предл</span>";
        case GrammarType.CONJUNCTION:
            return "<span class='badge badge-info'>Союз</span>";
        case GrammarType.PARTICLE:
            return "<span class='badge badge-dark'>Част</span>";
        case GrammarType.PARTICIPLE:
            return "<span class='badge badge-primary'>Прич</span>";
        case GrammarType.PHRASE_INCIPIO:
            return "<span class='badge badge-dark'>incipio</span>";
    }
    return "";
}

export function buildGendersHtml(genders: Gender[]) {
    let result: string[] = [];
    for (const gender of genders) {
        result.push(buildGenderHtml(gender));
    }
    return result.join(", ");
}

export function buildGenderHtml(gender: Gender) {
    switch (gender) {
        case Gender.MASCULINE:
            return "<attr title='мужской род'>м.р.</attr>";
        case Gender.FEMININE:
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
        case Tense.IMPERFECT:
            return "<attr title='имперфект (прошедшее время несовершенного вида)'>имперф.</attr>";
        case Tense.AORIST_1:
            return "<attr title='аорист I (прошедшее время совершенного вида)'>аор.I</attr>";
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
        case Voice.MEDIA_PASSIVE:
            return "<attr title='медио-пассивный залог'>мед-пассивн.</attr>";
        case Voice.MEDIA:
            return "<attr title='медиальный залог (возвратный)'>мед.</attr>";
        case Voice.PASSIVE:
            return "<attr title='пассивный залог'>пассив.</attr>";
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
    return `<p>${buildTypeHtml(annotation.type)} `
        + `<small>${buildGendersHtml(annotation.gender)}; ${buildCasesHtml(annotation.case)}; ${buildSingularityHtml(annotation.singularity)}</small> `
        + buildCanonicalSearchLinksHtml(annotation, token.transliteratedBasic)
        + "</p>";
}

export function buildVerbAnnotationHtml(token: Token, annotation: VerbAnnotation) {
    return `<p>${buildTypeHtml(annotation.type)} `
        + `<small>${buildMoodHtml(annotation.mood)}; ${buildVoiceHtml(annotation.voice)}; ${buildTenseHtml(annotation.tense)}; ${buildPersonHtml(annotation.person)}; ${buildSingularityHtml(annotation.singularity)}</small> `
        + buildCanonicalSearchLinksHtml(annotation, token.transliteratedBasic)
        + "</p>";
}

export function buildNounAnnotationHtml(token: Token, annotation: NounAnnotation) {
    return `<p>${buildTypeHtml(annotation.type)} `
        + `<small>${buildGendersHtml(annotation.gender)}; ${buildSingularityHtml(annotation.singularity)}; ${buildCasesHtml(annotation.case)}</small> `
        + buildCanonicalSearchLinksHtml(annotation, token.transliteratedBasic)
        + "</p>";
}

export function buildParticipleAnnotationHtml(token: Token, annotation: ParticipleAnnotation) {
    return `<p>${buildTypeHtml(annotation.type)} `
        + `<small>${buildVoiceHtml(annotation.voice)}; ${buildTenseHtml(annotation.tense)}; ${buildGenderHtml(annotation.gender)}; ${buildSingularityHtml(annotation.singularity)}; ${buildCasesHtml(annotation.case)}</small> `
        + buildCanonicalSearchLinksHtml(annotation, token.transliteratedBasic)
        + "</p>";
}

export function buildParticleAnnotationHtml(token: Token, annotation: ParticleAnnotation) {
    return `<p>${buildTypeHtml(annotation.type)} `
        + `<small>${buildGendersHtml(annotation.gender)}; ${buildCasesHtml(annotation.case)}; ${buildSingularityHtml(annotation.singularity)}; `
        + (annotation.person != null ? buildPersonHtml(annotation.person) : "")
        + "</small>"
        + buildCanonicalSearchLinksHtml(annotation, token.transliteratedBasic)
        + "</p>";
}

export function buildAliasesHtml(aliases: string[]) {
    if (aliases.length === 0) {
        return "";
    }
    return `<p>= ${aliases.map(a => untransliterate(a)).join(", ")}</p>`;
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
        } else if (annotation.type === GrammarType.PARTICLE) {
            content += buildParticleAnnotationHtml(token.token, annotation);
        } else if (annotation.type === GrammarType.PARTICIPLE) {
            content += buildParticipleAnnotationHtml(token.token, annotation);
        }
    }

    return content;
}

export function buildVocabularyEntryDescriptionHtml(description: VocabularyEntryDescription) {
    return description.secondary != null
        ? `${description.primary} <small>(${description.secondary})</small>`
        : description.primary;
}

export function buildVocabularyEntryHtml(vocabulary: VocabularyEntry) {
    return `<p>${buildTypeHtml(vocabulary.grammarType)} <strong>${untransliterate(vocabulary.word)}</strong> `
        + buildVocabularyEntryDescriptionHtml(vocabulary.description)
        + " </p>";
}

export function buildVocabularyHtml(token: AnnotatedToken) {
    let content = "";

    for (const vocabulary of token.vocabulary) {
        content += buildVocabularyEntryHtml(vocabulary);
    }

    return content;
}

export function buildCanonicalSearchLinksHtml(annotation: CanonicalAware, exclude: string = "") {
    const links: string[] = [];
    const words: string[] = [];
    for (const canonical of annotation.canonical) {
        if (canonical === exclude) {
            continue;
        }
        const greek = untransliterate(canonical);
        words.push(greek);
        links.push(buildSearchLinksHtml(greek, "secondary"));
    }
    return links.length > 0
        ? words.join(", ") + " \\ " + links.join(" ")
        : "";
}

export function buildPrimarySearchLinksHtml(annotatedToken: AnnotatedToken) {
    let links = buildSearchLinksHtml(annotatedToken.token.greekBasic);
    for (const alias of annotatedToken.aliases) {
        links += " " + buildSearchLinksHtml(untransliterate(alias));
    }
    return links;
}

export function buildSearchLinksHtml(greek: string, look: string = "primary") {
    return `<a class="btn btn-outline-${look} btn-sm" href="search.html?q=${greek}" target="_blank">${greek} &rarr;</a>`;
}
