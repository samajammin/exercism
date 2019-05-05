package hamming

import (
	"errors"
)

// Distance calculates the Hamming difference between two DNA strands
func Distance(a, b string) (int, error) {
	runeA := []rune(a)
	runeB := []rune(b)
	diff := 0
	if len(runeA) != len(runeB) {
		return diff, errors.New("DNA strands must be equal length")
	}
	for i := range runeA {
		if runeA[i] != runeB[i] {
			diff++
		}
	}
	return diff, nil
}
