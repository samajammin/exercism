package proverb

import "fmt"

// Proverb constructs a proverb from an array of words
func Proverb(rhyme []string) []string {

	length := len(rhyme)
	proverb := make([]string, length)

	for i := 0; i < length; i++ {
		if i == length-1 {
			proverb[i] = fmt.Sprintf("And all for the want of a %s.", rhyme[0])
		} else {
			proverb[i] = fmt.Sprintf("For want of a %s the %s was lost.", rhyme[i], rhyme[i+1])
		}
	}

	return proverb
}
