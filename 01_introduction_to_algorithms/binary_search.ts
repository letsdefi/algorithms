export function binary_search<T>(list: T[], item: T): number | null {
  let low: number = 0;
  let high: number = list.length - 1;
  while (low <= high) {
    let mid: number = Math.floor((low + high) / 2);
    let guess: T = list[mid];
    if (guess === item) {
      return mid;
    }
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
}
