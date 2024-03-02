// class Book {
//     constructor(name, author, publishDate){
//         this.name = name;
//         this.author = author;
//         this.publishDate = publishDate;
//     }
// title() {
//   console.log(this.name);
//   }
// writer() {
//  console.log(this.author);
// }
// age() {
//     console.log(this.publishDate);
// }
// }

// const myBook = new Book("Hobbit", "J.R.R. Tolkien", 1984,);
// const myNewBook = new Book ("Lord of the Ring", "J.R.R.Tolkien", 1991, );
// const myOldBook = new Book (" Chipolino ", "T.Gorobynchyck", 1978,);
// console.log(" My favourite Book " + myBook.name + " was written by " + this.author + ` in ` + (this.publishDate) )
// console.log (" My second favourite Book " + myNewBook.name + " was written by " + myNewBook.author + ` in ` + (myNewBook.publishDate))
// console.log(" The most favourite book from my childhood is " + myOldBook.name + " was written by " + myOldBook.author + ` in ` + (myOldBook.publishDate))

class Book1 {
    constructor(name, author, publishDate){
        this.name = name;
        this.author = author;
        this.publishDate = publishDate;
    }
    get Name () {
        return this.name
      }
      set Name(value){
        if (value.lengthOfTheName > 4){
            alert('Not correct choice');
            return;
        }
        this.name = value;
      }
PrintInfor() {
  console.log(`Title: ${this.name}`);
  console.log(`Author: ${this.author}`);
  console.log(`Publicated: ${this.publishDate}`);
  }
  static findOldestBook(books){
    let oldestBook = books[0];
    for (let i=1; i<books.length; i++){
      if(books(i).publishDate < oldestBook.publishDate)
    {
  oldestBook = books(i);
    }
  }
  return oldestBook;
  }
}

const myBook1 = new Book1("Hobbit")
myBook1.author = "J.R.R. Tolkien"
myBook1.publishDate = 1984
console.log(myBook1.PrintInfor())

const myNewBook = new Book1 ("Lord of the Ring")
myNewBook.author = "J.R.R.Tolkien"
myNewBook.publishDate =  1991 
console.log(myNewBook.PrintInfor())

const myOldBook = new Book1 (" Chipolino ")
myOldBook.author = "T.Gorobynchyck"
myOldBook.publishDate =  1978
console.log(myOldBook.PrintInfor())

const books = (myBook1, myNewBook, myOldBook);
const oldestBook = Book1.findOldestBook(books)
console.log('Oldest Book:'); 
 oldestBook.PrintInfor();
