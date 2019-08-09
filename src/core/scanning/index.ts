import { isLetter } from "../utils";
import { toLowerTransliteration, untransliterate } from "../transliteration";

const Separators = ".,;:!?- ";
const Diactric = "`'~$^#=";

function isSeparator(ch: string): boolean {
    const position = Separators.indexOf(ch);
    return position >= 0;
}

function isDiactric(ch: string): boolean {
    const position = Diactric.indexOf(ch);
    return position >= 0;
}

export interface Token {
    transliteratedFull: string;
    transliteratedBasic: string;
    greekFull: string;
    greekBasic: string;
}

export function* tokenize(inputTranslit: string): IterableIterator<Token> {
    let tokenFull = "";
    let tokenBasic = "";
    for (const ch of inputTranslit) {
        if (isLetter(ch) || ch === "/" || ch === "@") {
            tokenBasic += ch;
            tokenFull += ch;
            continue;
        }
        if (isDiactric(ch)) {
            tokenFull += ch;
            continue;
        }
        if (isSeparator(ch) && tokenBasic.length > 0) {
            yield createToken(tokenFull, tokenBasic);
            tokenBasic = "";
            tokenFull = "";
        }
    }
    if (tokenBasic.length > 0) {
        yield createToken(tokenFull, tokenBasic);
    }
}

function createToken(translitFull: string, translitBasic: string): Token {
    const translitFullLower = toLowerTransliteration(translitFull);
    const translitBasicLower = toLowerTransliteration(translitBasic);
    return {
        transliteratedFull: translitFullLower,
        transliteratedBasic: translitBasicLower,
        greekFull: untransliterate(translitFullLower),
        greekBasic: untransliterate(translitBasicLower),
    };
}
