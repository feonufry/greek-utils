
export function isLetter(ch: string): boolean {
    return /[a-z]/.test(ch)
        || /[A-Z]/.test(ch)
        || /[а-я]/.test(ch)
        || /[А-Я]/.test(ch)
        || /[α-ω]/.test(ch)
        || /[Α-Ω]/.test(ch);
}
