import { selectionSort } from "../01_selection_sort";

describe("Selection sort:", () => {
  it("should sort items", () => {
    let items = [5, 3, 6, 2, 10];
    expect(selectionSort(items)).toEqual([2, 3, 5, 6, 10]);
  });

  it("should sort another items", () => {
    let items = [
      5, 3, 6, 2, 10, 34, 55, 1, 143, 256, 321, 22, 44, 66, 77, 88, 99, 123,
      134, 154,
    ];

    expect(selectionSort(items)).toEqual([
      1, 2, 3, 5, 6, 10, 22, 34, 44, 55, 66, 77, 88, 99, 123, 134, 143, 154,
      256, 321,
    ]);
  });
});
