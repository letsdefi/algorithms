/**
 * Быстрый поиск
 * В лучшем случае отработает со скоростью О(n log n)
 * В худшем случае отработает со скоростью О(n2)
 * Это один из самых быстрых существующих алгоритмов сортировки.
 * @param array
 * @returns
 */
export function quickSort<T>(array: T[]): T[] {
  if (array.length < 2) {
    return array;
  }
  if (array.length === 2) {
    return array[0] < array[1] ? array : [array[1], array[0]];
  }

  let pivot: T = array[0];
  let less: T[] = [];
  let greater: T[] = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return quickSort(less).concat([pivot]).concat(quickSort(greater));
}
