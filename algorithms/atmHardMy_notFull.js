///разораться с исключением типа 30 по 4 когда ранее нельзя было выдать

function getResult(amount, limit, bank) {
    let rest = amount
    let result = Object.keys(limit).reduce((acc, key) => ({...acc, [key]: 0}), {})
    for (let [currency, value] of bank) {

        if (rest / +currency > 0) {
            const need = Math.trunc(rest / currency)

            result[currency] = Math.min(value, need);

            
            rest -= result[currency] * currency

        }
    }

    if (rest > 0 && bank.length - 1 > 0) {
        return getResult(amount, limit, (bank).slice(1))
    } else if (rest > 0) {
        return "Нет кратных купюр"
    }
    return result
}

function iWantToGet(amountRequired, limit) {
    const amountLimit = Object.entries(limit).reduce((acc, [key, value]) => {
        acc += key * value
        return acc
    }, 0)

    if (amountRequired === 0) return {}
    if (amountRequired > amountLimit) {
        return 'В банкомате недостаточно денег'
    }
    const bank = Object.entries(limit).sort(([keyA], [keyB]) => keyB - keyA)
    return getResult(amountRequired, limit, bank)
}

const limit = {
    500: 2,
    100: 5,
    50: 100,
    30: 6
}

console.log(iWantToGet(160, limit))