package luhn

import (
	"strings"
)

// Valid determines if a string is valid per the Luhn formula.
func Valid(input string) bool {
	stripped := strings.Replace(input, " ", "", -1)
	if len(stripped) < 2 {
		return false
	}
	runes := []rune(stripped)
	length := len(runes)
	ints := make([]int, length)
	for i := length - 1; i >= 0; i-- {
		num := int(runes[i] - '0')
		if num > 9 {
			return false
		}
		isSecondDigit := (length-i)%2 == 0
		if isSecondDigit {
			num *= 2
			if num > 9 {
				num -= 9
			}
		}
		ints[i] = num
	}
	sum := 0
	for _, val := range ints {
		sum += val
	}
	return sum%10 == 0
}
