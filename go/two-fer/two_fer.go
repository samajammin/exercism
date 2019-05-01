// Package twofer provides a ShareWith function
package twofer

import "fmt"

// ShareWith returns a string depending on name argument
func ShareWith(name string) string {
	title := name
	if title == "" {
		title = "you"
	}
	return fmt.Sprint("One for ", title, ", one for me.")
}
