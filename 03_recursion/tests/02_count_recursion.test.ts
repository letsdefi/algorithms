import { countRecursion } from "../02_count_recursion";
describe("Count list elements with recursion:", () => {
  it("should return 3", () => {
    let items = [5, 3, 2];
    expect(countRecursion(items)).toBe(3);
  });
  it("should return 1", () => {
    let items = [3];
    expect(countRecursion(items)).toBe(1);
  });
});
