// Найти длину наибольшего последовательного отрезка натуральных чисел
// getSequenceNatural([1, 2, 3, -5, 7, 8, 9, 10, 13, 14, 17, 18, 19])
// 4 (отрезок 7, 8, 9, 10)

const maxLenghtNatural = (mas) => {
  let counter = 1;
  let result = 0;

  for (let i = 0; i < mas.length; i++) {
    if (mas[i] + 1 === mas[i + 1]) {
      counter++;
    } else {
      if (counter > result) {
        result = counter;
      }

      counter = 1;
    }
  }

  return result;
};

console.log(
  maxLenghtNatural([1, 2, 3, 4, 5, -5, 7, 8, 9, 10, 13, 14, 17, 18, 19])
);
console.log(maxLenghtNatural([1]));
console.log(maxLenghtNatural([1, 2, 3, -5, 7, 8, 9, 10, 13, 14, 17, 18, 19]));
console.log(
  maxLenghtNatural([1, 2, 3, -5, 7, 8, 9, 10, 13, 14, 15, 16, 17, 18, 19])
);
console.log(maxLenghtNatural([1, 2, 3, -5, 7, 8, 13, -5, -4, -3, -2, -1]));
