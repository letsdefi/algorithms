import { quickSort } from "../01_quicksort";
describe("Quick sort algorithm", () => {
  it("should not be sorted", () => {
    expect(quickSort([])).toEqual([]);
  });
  it("should not be sorted", () => {
    expect(quickSort([3])).toEqual([3]);
  });
  it("should not be sorted", () => {
    expect(quickSort([3, 2])).toEqual([2, 3]);
  });
  it("should sort items", () => {
    let items = [5, 3, 6, 2, 10, 1];
    expect(quickSort(items)).toEqual([1, 2, 3, 5, 6, 10]);
  });
});
