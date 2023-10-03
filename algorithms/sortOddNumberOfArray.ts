/* Функцию, которая отсортирует массив таким образом,
чтобы все нечетные по значению числа в этом массиве оказались отсортированы по возрастанию,
а все четные оставить на своих местах.
Например, для массива
[ 2, 3, 7, 4, 6, 1, 5, 8, 9 ]
получим
[ 2, 1, 3, 4, 6, 5, 7, 8, 9 ]
*/
const sortingArray = (arr: number[]) => {
  const {
    oddNums, indexOfOddNums, result
  } = arr.reduce((acc, item, index) => {
    if (item % 2 !== 0) {
      acc.oddNums.push(item);
      acc.indexOfOddNums.push(index);
      return acc;
    }

    acc.result[index] = item;

    return acc;
  }, {
    oddNums: [] as number[],
    indexOfOddNums: [] as number[],
    result: Array(arr.length),
  });

  oddNums.sort((a, b) => a - b);
  oddNums.forEach((item, index) => {
    result[indexOfOddNums[index]] = item;
  });

  return result;
};

console.log(sortingArray([2, 3, 7, 4, 6, 1, 5, 8, 9])) // [ 2, 1, 3, 4, 6, 5, 7, 8, 9 ]