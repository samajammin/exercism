package collatzconjecture

import "fmt"

// CollatzConjecture returns the number of steps for the conjecture bring input to 1.
func CollatzConjecture(input int) (steps int, err error) {
	if input <= 0 {
		return 0, fmt.Errorf("invalid input: %d, must be above 0", input)
	}
	for input != 1 {
		steps++
		if input%2 == 0 {
			input /= 2
		} else {
			input = input*3 + 1
		}
	}
	return steps, nil
}
