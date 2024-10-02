class Book {
    constructor(name, author, year) {
        this.name = name
        this.author = author
        this.year = year
    }

    static oldestBook(books) {
        let oldestBook = books[0];
        for(let i = 1; i < books.length; i++) {
            if (books[i].getYear() < oldestBook.getYear()) {
                oldestBook = books[i]
            }
        }
        return oldestBook
    }

    setName(name) {
        if (!name) {
            console.log('Provided name is empty')
            return
        }
        this.name = name
    }

    setAuthor(author) {
        if (!author) {
            console.log('Provided author is empty')
            return
        }
        this.author = author
    }

    setYear(year) {
        if (!year) {
            console.log('Provided year is empty')
            return
        }
        this.year = year
    }

    getName() {
        return this.name
    }

    getAuthor() {
        return this.author
    }

    getYear() {
        return this.year
    }

    printInfo() {
        console.log(`Name: ${this.name}, author: ${this.author}, year: ${this.year}`)
    }
}

export default Book