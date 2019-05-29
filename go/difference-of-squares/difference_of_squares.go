package diffsquares

// SquareOfSum calculates the square of the sum of positive ints up to num.
func SquareOfSum(num int) (res int) {
	for i := 1; i <= num; i++ {
		res += i
	}
	return res * res
}

// SumOfSquares calculates the sum of positive ints squared up to num.
func SumOfSquares(num int) (res int) {
	for i := 1; i <= num; i++ {
		res += i * i
	}
	return res
}

// Difference calculates the difference between SquareOfSum and SumOfSquares.
func Difference(num int) (res int) {
	return SquareOfSum(num) - SumOfSquares(num)
}
