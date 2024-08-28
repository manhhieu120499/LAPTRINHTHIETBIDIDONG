const arr = [9, 11, 7, 6, 5]

Array.prototype.mySome = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i], i, this)) return true
    }
    return false
}

const check = arr.mySome((item) => {
    return item > 10
})
console.log(check)