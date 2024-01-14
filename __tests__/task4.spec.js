const firstNonRepeatedCharacter = require("../tasks/task4");
describe("findFirstNonRepeatedCharacter::", () => {
  it("should return null", () => {
    const result = firstNonRepeatedCharacter("aabbcc");
    expect(result).toBe(null);
  });

  it("should return d", () => {
    const result = firstNonRepeatedCharacter("abcabcd");
    expect(result).toBe("d");
  });
  it("should return a", () => {
    const result = firstNonRepeatedCharacter("abcdef");
    expect(result).toBe("a");
  });
});
