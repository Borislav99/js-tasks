// Refaktosi kod kako bi on bio clean sto je vise moguce

const calculateAverage = (numbers) => {
  let sum = 0;
  let count = 0;

  if (numbers === undefined) {
    return null;
  }

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    count++;
  }

  if (count === 0) {
    return null;
  }

  return sum / count;
};

module.exports = calculateAverage;
