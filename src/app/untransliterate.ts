import { isLetter } from "./utils";

const MapSource = "ABGDEZHQIKLMNXOPRSTYФХJWabgdezhqiklmvxoprsctuфхjw0123456789";
const MapDestination = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψω0123456789";

export function untransliterate(source: string|null|undefined): string {
    if (source == null) {
        return "";
    }
    let result = "";
    for (const ch of source) {
        const mapIndex = MapSource.indexOf(ch);
        if (mapIndex > 0 && MapDestination.length > mapIndex) {
            result += MapDestination[mapIndex];
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
