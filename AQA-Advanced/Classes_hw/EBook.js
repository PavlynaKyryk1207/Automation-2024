class Book1 {
    constructor(name, author, publishDate) {
      this.name = name;
      this.author = author;
      this.publishDate = publishDate;
    }
    PrintInfor() {
      console.log(`Name: ${this.name}`);
      console.log(`Author: ${this.author}`);
      console.log(`PublishDate: ${this.publishDate}`);
    }
  }
class EBook extends Book1 {
    constructor (name, author, publishDate, fileFormat){
         super(name, author, publishDate);
        this.format = fileFormat;
    }
        PrintInfor() {
            super.PrintInfor();
            console.log(`File Format: ${this.format}`);
     }
     get Name () {
        return this.name
      }
      set Name(value){
        if (value.lengthOfTheName <= 4){
            console.log('Not correct choice');
            return;
        }
        this.name = value;
      }
      static createEbook(book, fileFormat){
        return new EBook(book.name, book.author, book.publishDate, fileFormat);
      }
}
const ebook = new EBook('Why Has Nobody Told me this before?', 'Dr Julie Smith', 2022, 'PDF');
     ebook.PrintInfor();
     



