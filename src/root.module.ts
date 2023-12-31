import { Module } from '@nestjs/common';
import { BookController } from './app.controller';
import { BookService } from './book.service';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService],  // dependency injection
  exports: []
})
export class RootModule {
  constructor(){
    console.log(" App Module ")
  }
}
