function testFunc(num) {
    console.log(num)
    if (num <= 0) {
        return num
    } 
    return testFunc(num - 1)
}
testFunc(5)