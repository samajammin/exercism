package raindrops

import (
	"strconv"
)

// Convert converts a number to string depending on its factors.
func Convert(num int) (str string) {
	if num%3 == 0 {
		str += "Pling"
	}
	if num%5 == 0 {
		str += "Plang"
	}
	if num%7 == 0 {
		str += "Plong"
	}
	if len(str) == 0 {
		return strconv.Itoa(num)
	}
	return str
}
