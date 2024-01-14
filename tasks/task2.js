// Imamo niz teksta unutar koga se nalaze odredjene rijeci koje se ponavljaju. Napisati funkciju koja pronalazi i uklanja duplikate, ostavljajuci samo prvo ponavljanje svake rijeci. Redoslijed rijeci treba ostati isti.
const removeDuplicates = (text) => {
  let words = text.split(" ");
  let uniqueWords = [];

  for (let word of words) {
    if (!uniqueWords.includes(word)) {
      uniqueWords.push(word);
    }
  }

  return uniqueWords.join(" ");
};

module.exports = removeDuplicates;
