package reverse

// Reverse reverses a string.
func Reverse(str string) (reversed string) {
	letters := []rune(str)
	for _, letter := range letters {
		reversed = string(letter) + reversed
	}
	return reversed
}
