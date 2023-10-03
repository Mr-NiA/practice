// Поиск числа не имеющего пару
const input = [1,1,3, 66, 2,3,2]

const singleNumber = function (nums){
    let reduceSum = (acc, value) => acc + value
    let allSumUnique = Array.from(new Set(nums)).reduce(reduceSum)
    let allSum = input.reduce(reduceSum)

    return allSumUnique * 2 - allSum
}

console.log(singleNumber(input))