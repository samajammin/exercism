// Package twofer provides a ShareWith function
package twofer

import "fmt"

// ShareWith returns a string depending on name argument
func ShareWith(name string) string {
	if name == "" {
		name = "you"
	}
	return fmt.Sprint("One for ", name, ", one for me.")
}
