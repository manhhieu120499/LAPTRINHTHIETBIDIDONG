const arr = [9, 8, 7, 6, 5]

Array.prototype.myfilter = function(callbackFn) {
    let newArr = []
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i]))
            newArr.push(this[i])
    }
    return newArr
}

const newArr = arr.myfilter((item) => {
    return item % 2 == 1
})

console.log(newArr)