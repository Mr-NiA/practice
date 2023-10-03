const customGroupBy = function (arr, callback) {
    let result = {}

    for (let val of arr) {

        const key = typeof callback === 'string' ? val[callback] : callback(val)
        if (!result[key]) {
            result[key] = []
        }
        result[key].push(val)
    }

    return result
}


console.log(customGroupBy(['one', 'two', 'three'], 'length'))