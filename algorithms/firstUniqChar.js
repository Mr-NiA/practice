const a = 'leetcade'
const b = 'aabb'
const c = 'loveleetcode'

const firstUniqChar = function (s) {

    let all = []
    for (let i of s) {
        all[i] = all[i] + 1 || 1
    }
    for (let k of s){
        if (all[k] === 1) {
            return k
        }
    }
}

console.log(firstUniqChar(a))
console.log(firstUniqChar(b))
console.log(firstUniqChar(c))
