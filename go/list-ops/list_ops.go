package listops

// IntList is a collection of ints
type IntList []int

type (
	binFunc   func(int, int) int
	predFunc  func(int) bool
	unaryFunc func(int) int
)

// Foldr reduces a list from the right.
func (list IntList) Foldr(fn binFunc, accumulator int) int {
	for i := list.Length() - 1; i >= 0; i-- {
		accumulator = fn(list[i], accumulator)
	}
	return accumulator
}

// Foldl reduces a list from the left.
func (list IntList) Foldl(fn binFunc, accumulator int) int {
	for _, val := range list {
		accumulator = fn(accumulator, val)
	}
	return accumulator
}

// Filter returns a new list with items the predicate evaluated as true.
func (list IntList) Filter(fn predFunc) IntList {
	res := make(IntList, 0)
	for _, val := range list {
		if fn(val) {
			res = res.appendItem(val)
		}
	}
	return res
}

// Length returns the length of a list.
func (list IntList) Length() (length int) {
	for range list {
		length++
	}
	return length
}

// Map returns a new list with a function applied to each item.
func (list IntList) Map(fn unaryFunc) IntList {
	res := make(IntList, 0)
	for _, val := range list {
		res = res.appendItem(fn(val))
	}
	return res
}

// Reverse returns a new list with items in reverse order.
func (list IntList) Reverse() IntList {
	res := make(IntList, list.Length())
	idx := list.Length() - 1
	for i, val := range list {
		res[idx-i] = val
	}
	return res
}

// Append returns a new list with a list appended.
func (list IntList) Append(newList IntList) IntList {
	resLength := list.Length() + newList.Length()
	res := make(IntList, resLength)
	copy(res, list)
	idx := list.Length()
	for i, val := range newList {
		res[idx+i] = val
	}
	return res
}

func (list IntList) appendItem(item int) IntList {
	res := make(IntList, list.Length()+1)
	copy(res, list)
	res[list.Length()] = item
	return res
}

// Concat returns a new list of concatenated lists.
func (list IntList) Concat(newLists []IntList) IntList {
	res := make(IntList, list.Length())
	copy(res, list)
	for _, newList := range newLists {
		res = res.Append(newList)
	}
	return res
}
