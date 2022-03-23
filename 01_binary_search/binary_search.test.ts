import { binarySearch } from "./binary_search";
import items from "./items.json";

describe("Binary search:", () => {
  it("should find item in a simple list and return 2", () => {
    expect(binarySearch(items.simple_list, 4)).toBe(2);
  });
  it("should find item in list with 10 items and return 8", () => {
    expect(binarySearch(items.list_with_10_items, 18)).toBe(8);
  });
  it("should find item in list with 100 items and return 69", () => {
    expect(binarySearch(items.list_with_100_items, 6472)).toBe(69);
  });
  it("should find item in list with 1000 items and return 963", () => {
    expect(binarySearch(items.list_with_1000_items, 9713)).toBe(963);
  });
});
