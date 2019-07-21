
export function untransliterate(source: string|null|undefined): string {
    if (source == null) {
        return "";
    }
    let result = "";
    for (const _ of source) {
        result += "*";
    }
    return result;
}
