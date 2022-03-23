/**
 * Находит
 * @param items
 * @returns
 */
export const findMax = (items: number[]): number => {
  const itemsLength = items.length;
  let maxItemIndex = itemsLength - 1;
  let max = items[maxItemIndex];

  if (itemsLength === 1) {
    return max;
  }
  for (let i = 0; i < itemsLength; i++) {
    const next = findMax(items.slice(0, -1));
    if (next > max) {
      return next;
    } else {
      return max;
    }
  }
};
