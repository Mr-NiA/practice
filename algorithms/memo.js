const add = (b, c) => b.reduce((acc, value) => {
    acc += value;
    return acc
}, 0) + c

const memo = (cb) => {
    let cache = new Map()
    return (...arg) => {
        let key = ''
        for (let i of arg) {
            key += String(i)
        }
        const value = cache.get(key)
        if (value) {
            console.log('Fetching from cache');
            return value
        } else {
            console.log('Calculating result');
            let result = cb(...arg)
            cache.set(key, result)
            return result
        }
    }
}

const memoizedAdd = memo(add);

console.time()
console.log(memoizedAdd([3, 3], 5));  // calculated
console.timeEnd()
console.time()
console.log(memoizedAdd([3, 3], 5));  // calculated
console.timeEnd()
console.time()
console.log(memoizedAdd([3, 3], 5));  // calculated
console.timeEnd()
console.time()
console.log(memoizedAdd([3, 3], 5));  // calculated
console.timeEnd()