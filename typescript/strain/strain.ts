type Predicate<T> = (item: T) => boolean;

export function keep<T>(collection: T[], predicate: Predicate<T>): T[] {
  return filterFunc(collection, predicate, true);
}

export function discard<T>(collection: T[], predicate: Predicate<T>): T[] {
  return filterFunc(collection, predicate, false);
}

function filterFunc<T>(
  collection: T[],
  predicate: Predicate<T>,
  condition: boolean
): T[] {
  const res: T[] = [];
  collection.forEach(item => {
    if (predicate(item) === condition) {
      res.push(item);
    }
  });
  return res;
}
