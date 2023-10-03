const numberPolindrom = (num) => {
    if (num < 0) return false
    if (num < 10) return true

    let rev = 0
    while (num > rev) {
        rev *= 10
        rev += num % 10
        num = Math.trunc(num / 10)
    }
    console.log(num , rev)
    return num === rev || num === Math.trunc(rev / 10)
}

const num = 123321
const num2 = 12321

console.log(numberPolindrom(num))
console.log(numberPolindrom(num2))
