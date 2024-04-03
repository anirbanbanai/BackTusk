/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
constructor(
  @InjectRepository(Book)
  private readonly booksRepository:
  Repository<Book>
){}

  async create(CreateBookDto: CreateBookDto) {
    const book =  this.booksRepository.create(CreateBookDto)
    return await this.booksRepository.save(book);
  }

  async findAll() {
    return await this.booksRepository.find();
  }

  async findOne(id: number) {
    return await this.booksRepository.findOne({
      where:{
        id
      }
    });
  }

 async update(id: number, updateBookDto: UpdateBookDto) {
  const book = await this.booksRepository.findOne({
    where:{
      id
    }
  });

  if(!book){
    throw new NotFoundException();
  }
  
  Object.assign(book,updateBookDto)
    return await this.booksRepository.save(book);
  }

  async remove(id: number) {
    const book = await this.booksRepository.findOne({
      where:{
        id
      }
    });
    if(!book){
      throw new NotFoundException();
    }
    return await this.booksRepository.remove(book);
  }
}
