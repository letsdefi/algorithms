# Рекурсии

## Рекурсивная функция сложения всех элементов в массиве

```ts
/**
 * Рекурсивная функция сложения всех элементов в массиве
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

## Рекурсивную функция для подсчета элементов в списке

```ts
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
```

## Поиск наибольшего числа в списке (с использованием рекурсии)

```ts

```
