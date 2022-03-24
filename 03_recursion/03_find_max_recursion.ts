/**
 * Возвращает наибольшее число в списке
 * Внимание! Алгоритм не эффективен и не стоит использовать в рабочих проектах
 * Сложность алгоритма: O(N)
 * @param items
 * @returns
 */
export const findMax = (array: number[]): number => {
  switch (array.length) {
    case 0:
      return;
    case 1:
      return array[0];
    case 2:
      return array[0] > array[1] ? array[0] : array[1];
  }
  let max = findMax(array.slice(1));
  return array[0] > max ? array[0] : max;
};
