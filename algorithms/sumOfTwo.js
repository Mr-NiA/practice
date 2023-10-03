// Найти 2 часла, сумма который будет задана в функции
const sumOfTwo = (arr , target) => {
    const numObj = {}

    for (let i = 0; i < arr.length; i++){
        numObj[arr[i]] = i;
    }

    for (let i = 0; i < arr.length; i++){
        const diff = target - arr[i]

        const value = numObj[diff]

        if (numObj[diff] && value !==i ){
            return [arr[i], arr[value]]
        }
    }
}

console.log(sumOfTwo([2,7,11,15], 9))