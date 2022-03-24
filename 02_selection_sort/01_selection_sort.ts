/**
 * Сортировка выбором
 * Сложность: O(n2)
 * @param array
 * @returns
 */
export function selectionSort<T>(array: T[]): T[] {
  const sortedArray: T[] = [];
  const length = array.length;

  // Находит наименьший элемент в массиве и добавляет ero в новый массив
  for (let i: number = 0; i < length; i++) {
    // Находим индекс самого маленького значения
    const smallestIndex: number = findSmallestIndex(array);
    // Сохраняем элемент и удаляем его из массива
    const deletedItem = array.splice(smallestIndex, 1)[0];
    // Добавляем сохраненный элемент массив с отсортированными данными
    sortedArray.push(deletedItem);
  }

  return sortedArray;
}

/**
 * Находит индекс самого маленького значения в массиве.
 * Сложность: O(n) - так как проходимся по каждому элементу массива
 * @param array
 * @returns
 */
function findSmallestIndex<T>(array: T[]): number {
  let smallestIndex: number = 0;
  let smallestElement: T = array[smallestIndex];

  for (let i: number = 1; i < array.length; i++) {
    if (array[i] < smallestElement) {
      smallestElement = array[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}
