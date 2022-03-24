# Рекурсии

## 1. Рекурсивная функция сложения всех элементов в массиве

```ts
/**
 * Рекурсивная функция сложения всех элементов в массиве
 * Внимание! Алгоритм не эффективен и не стоит использовать в рабочих проектах
 * @param items
 * @returns
 */
export function sumRecursive(items: number[]): number {
  let itemsLength = items.length;
  if (itemsLength === 1) {
    return items[0];
  }
  for (let i = 0; i < itemsLength; i++) {
    const last = items[itemsLength - 1];
    return last + sumRecursive(items.slice(0, -1));
  }
}
```

## 2. Рекурсивную функция для подсчета элементов в списке

```ts
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
```

## 3. Поиск наибольшего числа в списке (с использованием рекурсии)

```ts
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
```

## 4. Сможете ли вы определить базовый и рекурсивный случай для бинарного поиска?

```ts
/**
 * Найти элемент в списке методом бинарного поиска используя рекурсию
 * Внимание! Алгоритм крайне не эффективен и не стоит использовать в рабочих проектах
 * @param array - array of element
 * @param target - searching element
 * @returns
 */
export function binarySearch<T>(array: T[], target: T): T | null {
  // Базовый случай
  if (array.length === 0) {
    return null;
  }
  if (array.length === 1 && array[0] === target) {
    return array[0];
  }
  if (array.length === 1 && array[0] !== target) {
    return null;
  }
  let low = 0;
  let high = array.length - 1;
  let mid = Math.floor((low + high) / 2);
  // когда в массиве остается 2 элемента Math.floor((low + high) / 2) дает 0
  // из-за этого необходимо скорректировать mid
  if (array.length === 2 && mid === 0) {
    mid = 1;
  }
  if (array[mid] === target) {
    return array[mid];
  }

  // Рекурсивный случай
  if (array[mid] > target) {
    return binarySearch(array.slice(0, -mid), target);
  } else {
    return binarySearch(array.slice(mid), target);
  }
}
```
