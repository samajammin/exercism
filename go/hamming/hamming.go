package hamming

import "errors"

// Distance calculates the Hamming difference between two DNA strands
func Distance(a, b string) (int, error) {
	diff := 0
	if len(a) != len(b) {
		return diff, errors.New("DNA strands must be equal length")
	}
	for i := range a {
		if a[i] != b[i] {
			diff++
		}
	}
	return diff, nil
}
