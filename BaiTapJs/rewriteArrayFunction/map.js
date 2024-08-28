const arr = [9, 8]

Array.prototype.mymap = function(callbackFn) {
    let newArr = []
    for (let i = 0; i < this.length; i++) {
        newArr.push(callbackFn(this[i], i, this))
    }
    return newArr
}

const newArr = arr.mymap((item) => {
    return item
})

console.log(newArr)