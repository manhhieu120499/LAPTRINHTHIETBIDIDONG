const arr = [9, 8, 7, 6, 5]

Array.prototype.myEvery = function(callbackFn) {
    let flag = true;
    for (let i = 0; i < this.length; i++) {
        if (!callbackFn(this[i])) flag = false
    }
    return flag;
}

const check = arr.myEvery((item) => {
    return item < 10
})

console.log(check);