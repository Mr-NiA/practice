const input = [1, 0, 0, 0]
const input2 = [1, 0, 0, 1, 0, 0, 0, 0, 0, 1]
const findDistance = function (seats) {
    let max = 0, count = 0

    for (let i = 0; i < seats.length; i++) {
        let current = seats[i];

        if (current === 0 && i === seats.length -1) {
            count += 1;
            max = Math.max(max, count)
            break;
        }

        if (current === 1) {
            count = 0
        } else {
            count += 1;
            max = Math.max(max, Math.ceil(count / 2))
        }
    }
    return max

}

console.log(findDistance(input2))