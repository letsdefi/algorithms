import { countRecursion } from "../02_count_recursion";
describe("Count array elements with recursion:", () => {
  it("should count items in array using recursion", () => {
    let items = [5, 3, 2];
    expect(countRecursion(items)).toBe(3);
  });
  it("should count items in array with single value using recursion", () => {
    let items = [3];
    expect(countRecursion(items)).toBe(1);
  });
});
