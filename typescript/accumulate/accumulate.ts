export default function accumulate<T, U>(
  collection: T[],
  accumulator: (i: T) => U
): U[] {
  const result: U[] = [];
  for (const item of collection) {
    result.push(accumulator(item));
  }
  return result;
}
