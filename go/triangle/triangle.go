package triangle

import (
	"math"
)

// Kind represents a type of triangle
type Kind int

const (
	// NaT == not a triangle
	NaT Kind = 0
	// Equ == equilateral
	Equ Kind = 1
	// Iso == isosceles
	Iso Kind = 2
	// Sca == scalene
	Sca Kind = 3
)

func isSideInvalid(x float64) bool {
	if x <= 0 || math.IsNaN(x) || math.IsInf(x, 0) {
		return true
	}
	return false
}

// KindFromSides calculates the Kind of triangle from its sides
func KindFromSides(a, b, c float64) Kind {
	hasInvalidSide := isSideInvalid(a) || isSideInvalid(b) || isSideInvalid(c)
	hasTooLongSide := a > b+c || b > a+c || c > a+b
	if hasInvalidSide || hasTooLongSide {
		return NaT
	}
	if a == b && b == c {
		return Equ
	}
	if a == b || a == c || b == c {
		return Iso
	}
	return Sca
}
