package accumulate

// Accumulate performs an operation on each item of a collection, returning a new collection.
func Accumulate(collection []string, operator func(string) string) []string {
	result := make([]string, len(collection))
	for i := range collection {
		result[i] = operator(collection[i])
	}
	return result
}
