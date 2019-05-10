package strain

// Ints is a collection of ints
type Ints []int

// Lists is a collection of Ints
type Lists []Ints

// Strings is a collection of strings
type Strings []string

// Discard checks a predicate on every int of a collection,
// returning a new collection of ints where the predicate is false.
func (collection Ints) Discard(predicate func(int) bool) (res Ints) {
	for _, item := range collection {
		if predicate(item) == false {
			res = append(res, item)
		}
	}
	return res
}

// Keep checks a predicate on every int of a collection,
// returning a new collection of ints where the predicate is true.
func (collection Ints) Keep(predicate func(int) bool) (res Ints) {
	for _, item := range collection {
		if predicate(item) == true {
			res = append(res, item)
		}
	}
	return res
}

// Keep checks a predicate on every string of a collection,
// returning a new collection of strings where the predicate is true.
func (collection Strings) Keep(predicate func(string) bool) (res Strings) {
	for _, item := range collection {
		if predicate(item) == true {
			res = append(res, item)
		}
	}
	return res
}

// Keep checks a predicate on every list of a collection,
// returning a new collection of lists where the predicate is true.
func (collection Lists) Keep(predicate func([]int) bool) (res Lists) {
	for _, item := range collection {
		if predicate(item) == true {
			res = append(res, item)
		}
	}
	return res
}
