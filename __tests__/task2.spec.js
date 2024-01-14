const removeDuplicates = require("../tasks/task2");

describe("removeDuplicates::", () => {
  test("should remove duplicate words, when they are not case sensitive", () => {
    const input = "The quick brown fox jumps over the lazy dog quick";
    const expectedResult = "The quick brown fox jumps over lazy dog";

    const result = removeDuplicates(input);

    expect(result).toBe(expectedResult);
  });

  test("should return empty string, when input is empty string", () => {
    const input = "";
    const expectedResult = "";

    const result = removeDuplicates(input);

    expect(result).toBe(expectedResult);
  });

  test("should return result string, when they are duplicates", () => {
    const input = "Hello world, how are you today?";
    const expectedResult = "Hello world, how are you today?";

    const result = removeDuplicates(input);

    expect(result).toBe(expectedResult);
  });
});
