package space

// Planet is a planet name
type Planet string

const secondsPerYearEarth = 31557600

var secondsPerYearPlanet = map[Planet]float64{
	"Earth":   secondsPerYearEarth,
	"Mercury": secondsPerYearEarth * 0.2408467,
	"Venus":   secondsPerYearEarth * 0.61519726,
	"Mars":    secondsPerYearEarth * 1.8808158,
	"Jupiter": secondsPerYearEarth * 11.862615,
	"Saturn":  secondsPerYearEarth * 29.447498,
	"Uranus":  secondsPerYearEarth * 84.016846,
	"Neptune": secondsPerYearEarth * 164.79132,
}

// Age calculates the years on a given planet
func Age(seconds float64, planet Planet) float64 {
	return seconds / secondsPerYearPlanet[planet]
}
