import { selectionSort } from "./selection_sort";

describe("Selection sort:", () => {
  it("should sort items", () => {
    let items = [5, 3, 6, 2, 10];
    expect(selectionSort(items)).toEqual([2, 3, 5, 6, 10]);
  });
});
