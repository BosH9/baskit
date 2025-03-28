export function removeSpecialCharacters(text: string): string {
  return text.replace(/[^a-zA-Z0-9]/g, '');
}

export function removeSpecialCharactersConvertToLowerCase(
  text: string
): string {
  return text.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase();
}
