import { sumRecursive } from "../01_sum_recursion";
describe("Recursion:", () => {
  it("should sum items in array using recursion", () => {
    let items = [5, 3, 2];
    expect(sumRecursive(items)).toBe(10);
  });
  it("should sum items in array with single value using recursion", () => {
    let items = [5];
    expect(sumRecursive(items)).toBe(5);
  });
});
