package diffsquares

// SquareOfSum calculates the square of the sum of positive ints up to num.
func SquareOfSum(num int) (res int) {
	sum := (num * (num + 1)) / 2
	return sum * sum
}

// SumOfSquares calculates the sum of positive ints squared up to num.
func SumOfSquares(num int) (res int) {
	return num * (num + 1) * (2*num + 1) / 6
}

// Difference calculates the difference between SquareOfSum and SumOfSquares.
func Difference(num int) (res int) {
	return SquareOfSum(num) - SumOfSquares(num)
}
