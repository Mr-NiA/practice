// Найти 3 часла, сумма который будет задана в функции
const sumOfThree = (nums, target = 0) => {
    let result = []
    if (array.length < 3) {
        return result
    }

    nums = Array.from(new Set(nums.sort((a, b) => a - b)))

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > target) {
            break
        }
        let j = i + 1, k = nums.length - 1

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            if (sum === target) {
                result.push([nums[i], nums[j], nums[k]])
                j++
                k--
                continue
            }
            if (sum < target) {
                j++
                continue
            }
            if (sum > target) {
                k--
            }
        }
    }
    return result
}

const array = [-2, -3, -1, 0, 1, 1, 4, 5, 3, 10]
console.log(sumOfThree(array, 5))