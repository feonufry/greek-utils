import { isLetter } from "./utils";
import { untransliterate } from "./untransliterate";

const Separators = ".,;:!?- ";

function isSeparator(ch: string): boolean {
    const position = Separators.indexOf(ch);
    return position >= 0;
}

export interface Token {
    translit: string;
    greek: string;
}

export function* tokenize(inputTranslit: string): IterableIterator<Token> {
    let token = "";
    for (const ch of inputTranslit) {
        if (isLetter(ch)) {
            token += ch;
            continue;
        }
        if (isSeparator(ch) && token.length > 0) {
            yield createToken(token);
            token = "";
        }
    }
    if (token.length > 0) {
        yield createToken(token);
    }
}

function createToken(translit: string): Token {
    const translitLower = translit.toLowerCase();
    return {
        translit: translitLower,
        greek: untransliterate(translitLower),
    };
}
