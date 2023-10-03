// Найти впадины в которых будет вода условно

const input2 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
const input1 = [4, 2, 0, 3, 2, 5]

function trap(height) {
    let result = 0;
    let left = 0, right = height.length - 1;
    let maxLeft = height[left], maxRight = height[right];

    while (left < right) {
        let L = height[left], R = height[right]
        maxLeft = Math.max(L, maxLeft)
        maxRight = Math.max(R, maxRight)
        let min = Math.min(maxLeft, maxRight)
        if (L > R) {
            right--
            if ((min - R) > 0) {
                result += min - R
            }
        } else {
            left++
            if ((min - L) > 0) {
                result += min - L
            }
        }
    }
    return result
}

console.log(trap(input2))
console.log(trap(input1))
