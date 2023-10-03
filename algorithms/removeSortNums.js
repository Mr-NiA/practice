// Поиск уникальных значение O(n)
const array = [0, 0, 0, 1, 2, 2, 3, 3, 3, 4, 6, 7, 7, 7, 8, 9]

const removeSortNums = (nums) => {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1)
            i--
        }
    }
    return nums
}


console.log(removeSortNums(array))