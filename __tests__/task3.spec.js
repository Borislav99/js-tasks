const calculateAverage = require("../tasks/task3");

describe("calculateAverage::", () => {
  test("should return 3", () => {
    const result1 = calculateAverage([1, 2, 3, 4, 5]);
    expect(result1).toBe(3);
  });

  test("should return null, when input is empty array", () => {
    const result = calculateAverage([]);
    expect(result).toBe(null);
  });

  test("should return null, when input is undefined", () => {
    const result = calculateAverage(undefined);
    expect(result).toBe(null);
  });
});
