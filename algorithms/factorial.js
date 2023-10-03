function factorial(num, sum = 1) {

    if (num > 1) {
        return  factorial(num-1, sum * num)
    }else if (num < 1){
        return num
    }
    return sum
}

console.log(factorial(1))