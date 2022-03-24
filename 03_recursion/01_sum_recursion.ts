/**
 * Рекурсивная функция сложения всех элементов в массиве
 * Внимание! Алгоритм не эффективен и не стоит использовать в рабочих проектах
 * Сложность алгоритма: O(n)
 * @param array
 * @returns
 */
export function sum(array: number[]): number {
  switch (array.length) {
    case 0:
      return null;
    case 1:
      return array[0];
  }
  return array[0] + sum(array.slice(1));
}
