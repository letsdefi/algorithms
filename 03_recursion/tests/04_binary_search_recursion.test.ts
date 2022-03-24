import { binarySearch } from "../04_binary_search_recursion";

describe("Binary search:", () => {
  // Сформируем массив по которому будем искать
  let array = [];
  const start = 0;
  const end = 2;
  for (let i = start; i <= end; i++) {
    array.push(i);
  }

  // Для каждого элемента массива запустим тест
  for (let i = start; i <= end; i++) {
    it(`should find item ${i}`, () => {
      expect(binarySearch(array, i)).toBe(i);
    });
  }

  it("should return null", () => {
    expect(binarySearch(array, end + 1)).toBe(null);
  });
});
