package etl

import (
	"strings"
)

// Transform converts a map into a new format.
func Transform(input map[int][]string) map[string]int {
	output := make(map[string]int)

	for k, v := range input {
		for _, char := range v {
			output[strings.ToLower(char)] = k
		}
	}

	return output
}
