/**
 * Найти элемент в списке методом бинарного поиска используя рекурсию
 * Внимание! Алгоритм крайне не эффективен и не стоит использовать в рабочих проектах
 * @param array - array of element
 * @param target - searching element
 * @returns
 */
export function binarySearch<T>(array: T[], target: T): T | null {
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
  if (array[mid] > target) {
    return binarySearch(array.slice(0, -mid), target);
  } else {
    return binarySearch(array.slice(mid), target);
  }
}
