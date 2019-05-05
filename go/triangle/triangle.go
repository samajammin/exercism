package triangle

import (
	"math"
)

// Kind represents a type of triangle
type Kind int

const (
	// NaT = not a triangle (0)
	NaT Kind = iota
	// Equ = equilateral (1)
	Equ
	// Iso = isosceles (2)
	Iso
	// Sca = scalene (3)
	Sca
)

func isValidLength(length float64) bool {
	return length > 0 && length < math.Inf(1)
}

// KindFromSides calculates the Kind of triangle from its sides
func KindFromSides(a, b, c float64) Kind {
	hasValidSides := isValidLength(a) && isValidLength(b) && isValidLength(c)
	violatesTriangleInequality := a > b+c || b > a+c || c > a+b
	if !hasValidSides || violatesTriangleInequality {
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
