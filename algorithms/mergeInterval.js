let input1 = [[2, 6], [15, 18], [8, 10], [1, 3]]
let input2 = [[1, 4], [4, 5]]


function merge(intervals) {
    intervals.sort(([a], [b]) => a - b)

    let res = [intervals[0]]

    for (let interval of intervals) {

        let lastOfResult = res.at(-1)

        if (lastOfResult[1] >= interval[0]) {
            lastOfResult[1] = Math.max(lastOfResult[1], interval[1])
        } else {
            res.push(interval)
        }
    }
    return res
}

console.log(merge(input1))
console.log(merge(input2))
