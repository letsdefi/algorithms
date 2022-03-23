/**
 * Возвращает количество элементов в массиве используя рекурсию
 * @param items
 * @returns
 * Сложность алгоритма: O(n)
 */
export function countRecursion<T>(items: T[]): number {
  let itemsLength = items.length;
  if (itemsLength === 1) {
    return 1;
  }
  for (let i = 0; i < itemsLength; i++) {
    return 1 + countRecursion(items.slice(0, -1));
  }
}
