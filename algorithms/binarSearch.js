let arr1 = [4, 5, 6, 7, 0, 1, 2]
let arr2 = [11, 13, 14, 15, 6, 4, 2]

let search = function (nums, target) {
    let L = 0;
    let R = nums.length - 1

    while (L <= R) {
        let M = Math.floor((L + R) / 2)
        if (nums[M] === target) {
            return M
        }
        if (nums[L] <= nums[M]) {
            // левая сторона
            if (nums[L] <= target && target <= nums[M]) {
                R = M - 1;
            } else {
                L = M + 1;
            }
        } else {
            // правая сторона
            if (nums[M] <= target && target <= nums[R]) {
                L = M + 1
            } else {
                R = M - 1
            }
        }
    }
    return -1;
}

console.log(search(arr1, 4))
console.log(search(arr2, 15))
