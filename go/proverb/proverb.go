package proverb

import "fmt"

// Proverb creates a proverb from an array of words
func Proverb(rhyme []string) []string {
	if len(rhyme) == 0 {
		return rhyme
	}

	proverb := make([]string, 0)

	for i := 0; i < len(rhyme)-1; i++ {
		phrase := fmt.Sprintf("For want of a %s the %s was lost.", rhyme[i], rhyme[i+1])
		proverb = append(proverb, phrase)
	}

	finalPhrase := fmt.Sprintf("And all for the want of a %s.", rhyme[0])
	proverb = append(proverb, finalPhrase)
	return proverb
}
