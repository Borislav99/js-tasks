const anagramChecker = require("../tasks/task1");

describe("anagram checker::", () => {
  it("should return true, when two strings are anagrams", () => {
    const result = anagramChecker("listen", "silent");
    expect(result).toBe(true);
  });
  it("should return false, when two strings are not anagrams", () => {
    const result = anagramChecker("string 1", "string 2");
    expect(result).toBe(false);
  });
});
