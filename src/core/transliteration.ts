import { isLetter } from "./utils";

const Transliterated = "ABGDEZHQIKLMNXOPRSTYФХJWЧabgdezhqiklmvxoprsctuфхjwч/`'~$^;.,:#=@";
const Greek = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩϞαβγδεζηϑικλμνξοπρσςτυφχψωϟ\u0345\u0300\u0301\u0342\u0314\u0313\u037e.,\u0387\u0374\u0308'";

const Upper = "ABGDEZHQIKLMNXOPRSTYФХJWЧ";
const Lower = "abgdezhqiklmvxoprstuфхjwч";

// DIALYTIKA     = ◌̈  (u+0308)
// OXIA          '     (u+0301 or 0341)
// VARIA         `     (u+0300 or 0340)
// PERISPOMENI   ~ ◌͂  (u+0342)
// PSILI         ^  ◌̓ (u+0313) (smooth breathing)
// DASIA         $ ◌̔  (u+0314)
// YPOGEGRAMMENI / ◌ͅ   (u+0345)
// apostrophe    @
// CORONIS - ◌̓ (u+0343)

export function toLowerTransliteration(source: string) {
    let result = "";
    for (let index = 0; index < source.length; ++index) {
        const ch = source[index];
        const lowerIndex = Lower.indexOf(ch);
        if (lowerIndex >= 0) {
            result += ch;
            continue;
        }
        const upperIndex = Upper.indexOf(ch);
        if (upperIndex >= 0) {
            result += Lower[upperIndex];
            continue;
        }
        result += ch.toLowerCase();
    }
    return result;
}

function transform(source: string, mapSource: string, mapDestination: string): string {
    let result = "";
    for (let sourceIndex = 0; sourceIndex < source.length; ++sourceIndex) {
        const ch = source[sourceIndex];
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
