import Book from './Book.js';
import EBook from './EBook.js';

const book1 = new Book('Harry Potter', 'J. Rowling', 2000)
const book2 = new Book('Lord of the Rings', 'J. Tolkin', 1933)
const book3 = new Book('Game of Thrones', 'G. Martin', 1993)

console.log('Books:')
book1.printInfo()
book2.printInfo()
book3.printInfo()

const eBook1 = new EBook('Harry Potter', 'J. Rowling', 2000, 'epub')
const eBook2= new EBook('Harry Potter 2', 'J. Rowling', 2003, 'mobi')

console.log('EBooks:')
eBook1.printInfo()
eBook2.printInfo()

eBook1.setName()
eBook1.setAuthor()
eBook1.setYear()
eBook1.setFileFormat()

const books = [book1, book2, book3, eBook2]

const oldestBook = Book.oldestBook(books)
console.log('Oldest book:')
oldestBook.printInfo()

const convertedEBook = EBook.createEBook(book1)
console.log('Converted EBook:')
convertedEBook.printInfo()