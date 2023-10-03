const fibonachi = (num) => {
    let a = 1, b = 1;
    for (let i = 3; i <= num; i++) {
        [a, b] = [b, a + b]
    }
    return b
}
let i = 10
while (i > 0) {
    console.log(fibonachi(i))
    i--
}
