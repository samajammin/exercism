package luhn

import (
	"strconv"
	"strings"
)

// Valid determines if a string is valid per the Luhn formula.
func Valid(input string) bool {
	stripped := strings.ReplaceAll(input, " ", "")
	if len(stripped) < 2 {
		return false
	}

	runes := []rune(stripped)
	length := len(runes)
	ints := make([]int, length)
	sum := 0

	for i := length - 1; i >= 0; i-- {
		num, err := strconv.ParseUint(string(runes[i]), 10, 64)
		if err != nil {
			return false
		}
		isSecondDigit := (length-i)%2 == 0
		if isSecondDigit {
			num *= 2
			if num > 9 {
				num -= 9
			}
		}
		ints[i] = int(num)
		sum += int(num)
	}
	return sum%10 == 0
}
