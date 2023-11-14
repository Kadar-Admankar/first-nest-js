import { Injectable } from "@nestjs/common"

@Injectable()   // dependency injection
export class BookService{
       // add Book
       addBook() : string{
          return "This will add book"
       }
  
       // delete Book
       deleteBook() : string{
          return "This will delete book"
       }
  
       // update Book
       updateBook() : string{
          return "This will update book"
       }

       // find All Book
       findAllBooks(): string{
          return "This will find all books"
       }
  
       // dynamic routes
    //    findBookById(@Param() params): string {
    //       console.log(params.bookId)
    //       return `This will find a book of id #${params.bookId}`
    //    }
}