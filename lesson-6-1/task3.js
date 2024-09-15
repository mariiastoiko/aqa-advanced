function checkOrder(availiabe, ordered) {
    if (availiabe < ordered) {
        return 'Your order is too large, we don’t have enough goods.'
    }
    if (ordered == 0) {
        return 'Your order is empty'
    }
    if (availiabe >= ordered) {
        return 'Your order is accepted'
    }
}
console.log(checkOrder(10, 100))
console.log(checkOrder(10, 0))
console.log(checkOrder(10, 10))