export function binarySearchRecursion<T>(list: T[], item: T): number | null {
  const listLength = list.length;

  let low: number = 0;
  let high: number = listLength - 1;

  let mid: number = Math.floor((low + high) / 2);
  let guess: T = list[mid];

  console.log({ list, mid, guess, item });

  // Базовый случай
  if (guess === item) {
    return mid;
  }
  // Рекурсивный случай
  while (low <= high) {
    if (guess > item) {
      high = mid;
    } else {
      low = mid + 1;
    }

    return binarySearchRecursion(list.slice(low, high + 1), item);
  }
  return null;
}
