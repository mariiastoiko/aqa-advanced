function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error('на нуль ділити не можна')
    }
    if (isNaN(numerator) || isNaN(denominator)) {
        throw new Error('invalid input')
    }  
    return numerator / denominator
}
try {
    console.log(divide(10,2))
} catch(error) {
    console.log(error.message, error)
} finally {
    console.log('Робота завершена')
}
try {
    console.log(divide(2,0))
} catch(error) {
    console.log(error.message, error)
} finally {
    console.log('Робота завершена')
}
try {
    console.log(divide(4,'a'))
} catch(error) {
    console.log(error.message, error)
} finally {
    console.log('Робота завершена')
}



// divide(3,0)
// divide(2,'a')