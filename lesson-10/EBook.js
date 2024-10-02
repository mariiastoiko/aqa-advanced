import Book from './Book.js';

class EBook extends Book {
    constructor(name, author, year, fileFormat) {
        super(name, author, year)
        this.fileFormat = fileFormat
    }

    static createEBook(book) {
        return new EBook(book.getName(), book.getAuthor(), book.getYear(), '****')
    }

    setFileFormat(fileFormat) {
        if (!fileFormat) {
            console.log('Provided file format is empty')
            return
        }
        this.fileFormat = fileFormat
    }

    getFileFormat() {
        return this.fileFormat
    }
    
    printInfo() {
        console.log(`Name: ${this.name}, author: ${this.author}, year: ${this.year}, file format: ${this.fileFormat}`)
    }
}

export default EBook