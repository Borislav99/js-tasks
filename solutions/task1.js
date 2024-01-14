const anagramChecker = (string1, string2) => {
  const removeSpacesAndConvertToLowerCase = (string) =>
    string.replace(/\s/g, "").toLowerCase();

  const valueToCompare1 = removeSpacesAndConvertToLowerCase(string1);
  const valueToCompare2 = removeSpacesAndConvertToLowerCase(string2);

  const sort = (str) => str.split("").sort().join("");

  return sort(valueToCompare1) === sort(valueToCompare2);
};

module.exports = anagramChecker;
