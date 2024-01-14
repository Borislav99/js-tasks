const removeDuplicates = (text) => {
  let words = text.split(" ");
  let uniqueWords = [];

  for (let word of words) {
    // pretvori u lower case, zbog lower case poredjenja
    let lowerCaseWord = word.toLowerCase();

    // provjera da li se ta lower case rijec vec nalazi u nizu za poredjenje
    const isLowerCaseIncluded = uniqueWords.some(
      (existingWord) => existingWord.toLowerCase() === lowerCaseWord
    );

    if (!isLowerCaseIncluded) {
      uniqueWords.push(word);
    }
  }

  return uniqueWords.join(" ");
};

module.exports = removeDuplicates;
