const input1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]
const input2 = [1, 1]
const input3 = [4, 3, 2, 1, 4]
const input4 = [0, 0, 100]

// Условно есть стены которые , можно двигать надо узнать какие две стены дадут максимальную площать внутри
function maxArea(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.at(-1)
    let index = [left, right]

    while (left < right) {
        let L = height[left], R = height[right]

        let newMax = Math.min(L, R) * (right - left)
        if (newMax > maxArea) {
            index = [left, right]
            maxArea = newMax
        }

        if (L > R) {
            right--
        } else {
            left++
        }
    }
    return [index, maxArea]
}

console.log(maxArea(input1))
console.log(maxArea(input2))
console.log(maxArea(input3))
console.log(maxArea(input4))


