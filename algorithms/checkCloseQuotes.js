let  s = '()'
let s2 = '(){}[]'
let s3 = '){'
let s6 = '{[]}()()'

let brackets = {
    ')':'(',
    '}':'{',
    ']':'['
}
function isClosed(s){
    return Object.keys(brackets).indexOf(s) > -1
}
function isValid (s) {
    let stack = []
    for (let i of s){
        console.log(stack)
        if (isClosed(i)){
            if (brackets[i] !== stack.pop()) return false
        }else {
            stack.push(i)
        }
    }
    return stack.length === 0
}


console.log(isValid(s))
console.log(isValid(s2))
console.log(isValid(s3))
console.log(isValid(s6))

