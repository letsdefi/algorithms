/**
 * Возвращает количество элементов в массиве используя рекурсию
 * Внимание! Алгоритм не эффективен и не стоит использовать в рабочих проектах
 * Сложность алгоритма: O(n)
 * @param items
 * @returns

 */
export function countRecursion<T>(items: T[]): number {
  if (items.length === 0) {
    return 0;
  }
  return 1 + countRecursion(items.slice(1));
}
