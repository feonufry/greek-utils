import { isLetter } from "./utils";

const Transliterated = "ABGDEZHQIKLMNXOPRSTYФХJWabgdezhqiklmvxoprsctuфхjw/";
const Greek = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψω\u037a";

function transform(source: string, mapSource: string, mapDestination: string): string {
    let result = "";
    for (const ch of source) {
        const mapIndex = mapSource.indexOf(ch);
        if (mapIndex >= 0 && mapDestination.length > mapIndex) {
            result += mapDestination[mapIndex];
            continue;
        }
        if (isLetter(ch)) {
            result += "*";
            continue;
        }
        result += ch;
    }
    return result;
}

export function untransliterate(source: string): string {
    return transform(source, Transliterated, Greek);
}

export function transliterate(source: string): string {
    return transform(source, Greek, Transliterated);
}
