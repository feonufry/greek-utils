
export enum Gender {
    MASCULINE,
    FEMININE,
    NEUTER,
}

export enum Singularity {
    SINGULAR,
    PLURAL,
}

export enum Case {
    NOMINATIVE, // subject
    GENITIVE, // possessive
    DATIVE, // indirect object
    ACCUSATIVE, // direct object
    VOCATIVE,
}

export enum Mood {
    INDICATIVE, // a state of factuality and reality
}

export enum Tense {
    PRESENT,
    IMPERFECT, // past incomplete
}

export enum Voice {
    ACTIVE,
    MEDIA_PASSIVE,
}

export enum Person {
    FIRST,
    SECOND,
    THIRD,
}

export enum GrammarType {
    ARTICLE,
    NOUN,
    ADJECTIVE, // прилагательное
    PRONOUN, // местоимение
    VERB,
    ADVERB, // наречие
    PREPOSITION, // предлог
    CONJUNCTION, // союз
    PARTICLE, // частица
}

export interface VocabularyEntryDescription {
    primary: string;
    secondary?: string;
}

export interface VocabularyEntry {
    word: string;
    grammarType: GrammarType;
    skipAnnotations: boolean;
    description: VocabularyEntryDescription;
}

export interface CanonicalTransformation {
    original: string;
    replacement: string;
}

export interface CanonicalAware {
    canonical: string[];
}

export interface CanonicalTransformationAware {
    canonicalTransformations: CanonicalTransformation[];
    incremented?: boolean;
}

export interface ArticleAnnotation {
    type: GrammarType.ARTICLE;
    gender: Gender[];
    singularity: Singularity;
    case: Case[];
    canonical: string[];
    related: string[];
}

export interface ParticleAnnotation {
    type: GrammarType.PARTICLE;
    gender: Gender[];
    singularity: Singularity;
    case: Case[];
    person?: Person;
    canonical: string[];
}

export interface NounAnnotation {
    type: GrammarType.NOUN;
    gender: Gender[];
    singularity: Singularity;
    case: Case[];
    canonical: string[];
    canonicalTransformations: CanonicalTransformation[];
}

export interface VerbAnnotation {
    type: GrammarType.VERB;
    mood: Mood;
    tense: Tense;
    voice: Voice;
    person: Person;
    singularity: Singularity;
    canonical: string[];
    canonicalTransformations: CanonicalTransformation[];
    incremented?: boolean;
}

export type GrammarAnnotation = ArticleAnnotation
    | VerbAnnotation
    | NounAnnotation
    | ParticleAnnotation;

export interface SearchResult {
    vocabulary: VocabularyEntry[];
    annotations: GrammarAnnotation[];
    aliases: string[];
}
