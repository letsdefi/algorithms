import { findMax } from "../03_find_max_recursion";
describe("Поиск наибольшего числа в списке", () => {
  it("should return 101 - max value from [12, 3, 11, 5, 101, 6, 1, 55, 32]", () => {
    expect(findMax([12, 3, 11, 5, 101, 6, 1, 55, 32])).toBe(101);
  });
  it("should return 12 - max value from [12, 3]", () => {
    expect(findMax([12, 3])).toBe(12);
  });
  it("should return 12 - max value from [12]", () => {
    expect(findMax([12])).toBe(12);
  });
  it("should return 0 - max value from [-1, -2, 0]", () => {
    expect(findMax([-1, -2, 0])).toBe(0);
  });
});
