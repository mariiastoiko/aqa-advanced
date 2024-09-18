const oddNumber = () => {
    console.log('number is odd');
}

const evenNumber = () => {
    console.log('number is even');
}



function handleNum(number,oddNumberCallback, evenNumberCallback) {
    console.log('number is:' + number)
    if (number % 2 !== 0) {
        oddNumberCallback()
    } else {
        evenNumberCallback()
    }    
}

handleNum(7, oddNumber, evenNumber)