const classNames = ['link', 'main', 'article', 'article','big-item','link','link', 'big-item']

const setClassNames = (array) => {
    const obj = {}
    for (let el of array){
        obj[el] = obj[el] + 1 || 1
    }
    return Object.keys(obj).sort((a,b) => obj[b] - obj[a])

}

console.log(setClassNames(classNames))
