function printWithDeelay(text, deelay) {
    setTimeout(() => { console.log(text) }, deelay)
}

printWithDeelay('Hello World!', 5000)