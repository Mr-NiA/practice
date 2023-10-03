Array.prototype.customFilter = function (callback) {
    const result = []

    for (let i = 0; i < this.length; i++) {

        const el = callback(this[i], i, this)
        if (el) {
            result.push(this[i])
        }
    }
    return result
}

const arr = [1, 3, 4, 5, 2, 5, 23, 4, 6, 31]
const b = arr.customFilter((el) => el > 3)

console.log(b)

