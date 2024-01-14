const calculateAverage = (numbers = []) => {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const count = numbers.length;

  return count === 0 ? null : sum / count;
};

module.exports = calculateAverage;
