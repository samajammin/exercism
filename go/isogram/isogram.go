package isogram

import "unicode"

// IsIsogram calculates if a string is an isogram.
func IsIsogram(word string) bool {
	letterSet := make(map[rune]bool)
	for _, letter := range word {
		lower := unicode.ToLower(letter)
		isValidDup := lower == '-' || lower == ' '
		if letterSet[lower] && !isValidDup {
			return false
		}
		letterSet[lower] = true
	}
	return true
}
