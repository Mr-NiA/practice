function iWantToGet(amountRequired) {
    let rest = amountRequired;
    let bank = new Map([
        [100, 0],
        [50, 0],
        [20, 0],
        [10, 0],
    ])

    for (let currency of bank.keys()) {

        if (rest / +currency > 0) {
            let amount = Math.floor( rest / +currency);
            bank.set(currency, amount)
            rest -= amount * currency
        }
    }

    return {
        ...Object.fromEntries(bank),
        rest
    }
}

console.log(iWantToGet(1752))