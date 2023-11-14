import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
import { BookService } from "./book.service"

@Controller("book")
export class BookController{

    //  public bookService : BookService = new BookService()  // this is by creating object of book service

    // NestJS has provided me with the Object
    constructor(private bookService: BookService){}
     // add Book
     @Post("/add")  // this will be end point of url
     addBook() : string{
       return this.bookService.addBook()
     }

     // delete Book
     @Delete("/delete")
     deleteBook() : string{
        return this.bookService.deleteBook()
     }

     // update Book
     @Put("/update")
     updateBook() : string{
        return this.bookService.updateBook()
     }

     // find All Book
     @Get("/findAll")
     findAllBooks(): string{
        return this.bookService.findAllBooks()
     }

     // dynamic routes
    //  @Get('/findBookById/:bookId')
    //  findBookById(@Param() params): string {
    //     console.log(params.bookId)
        
    //  }

}