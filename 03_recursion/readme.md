# Рекурсии

Рекурсивная функция сложения всех элементов в массиве

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
