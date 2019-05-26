package isogram

import "unicode"

// IsIsogram calculates if a string is an isogram.
func IsIsogram(word string) bool {
	letterSet := make(map[rune]bool)
	for _, letter := range word {
		lower := unicode.ToLower(letter)
		if lower == '-' || lower == ' ' {
			continue
		}
		if letterSet[lower] {
			return false
		}
		letterSet[lower] = true
	}
	return true
}
