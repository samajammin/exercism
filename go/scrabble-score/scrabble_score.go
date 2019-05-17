package scrabble

import "unicode"

var letterScores = map[rune]int{
	97:  1,
	98:  3,
	99:  3,
	100: 2,
	101: 1,
	102: 4,
	103: 2,
	104: 4,
	105: 1,
	106: 8,
	107: 5,
	108: 1,
	109: 3,
	110: 1,
	111: 1,
	112: 3,
	113: 10,
	114: 1,
	115: 1,
	116: 1,
	117: 1,
	118: 4,
	119: 4,
	120: 8,
	121: 4,
	122: 10,
}

// Score computes the Scrabble value of a word.
func Score(word string) (score int) {
	for _, theRune := range word {
		score += letterScores[unicode.ToLower(theRune)]
	}
	return score
}
