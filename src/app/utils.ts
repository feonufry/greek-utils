
export function isLetter(ch: string): boolean {
    const chLower = ch.toLowerCase();
    return /[a-z]/.test(chLower) || /[а-я]/.test(chLower);
}
