import { sum } from "../01_sum_recursion";
describe("Sum list of numbers with recursion", () => {
  it("should return 10", () => {
    let items = [5, 3, 2];
    expect(sum(items)).toBe(10);
  });
  it("should return 5", () => {
    let items = [5];
    expect(sum(items)).toBe(5);
  });
  it("should return null", () => {
    let items = [];
    expect(sum(items)).toBe(null);
  });
});
