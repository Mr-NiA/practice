'use strict'

const bind = (fn, context, ...arg) => (...rest) => {
    return fn.apply(context, [...arg, ...rest])
}
const b = {
    a: 111,
    b: 222
}
function log (...arg) {
    console.log(this, ...arg)
}

const a = bind(log, b, {dddd: 333})
