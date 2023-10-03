const inp1 = 'babad'
const inp2 = 'cbbd'
const inp3 = 'mississippi'
const inp4 = 'ac'

function maxPolindrom(s) {
    let start = 0, end = 0;

    for (let i = 0; i < s.length; i++) {

        let len1 = findSpread(s, i, i)
        let len2 = findSpread(s, i, i + 1)
        let len = Math.max(len2, len1)

        if (len > end - start) {
            start = Math.ceil(i - (len - 1) / 2)
            end = Math.floor(i + (len / 2))
        }
    }

    function findSpread(s, L, R) {
        while (L > 0 && R < s.length && s[L] === s[R]) {
            L--;
            R++;
        }

        return R - L - 1
    }

    return s.substring(start, end + 1)
}

console.log(maxPolindrom(inp1))
console.log(maxPolindrom(inp2))
console.log(maxPolindrom(inp3))
console.log(maxPolindrom(inp4))