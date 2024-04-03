/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { BooksModule } from './books/books.module';
import { FormsModule } from './forms/forms.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        // host: '127.0.01',
        port: 5432,
        username: 'postgres',
        password: 'Ani2004',
        database: configService.get('backTsk'),
        entities: [join(process.cwd(), 'dist/**/**.entity.js')],
        // Do not use snchronize:true in real project
        synchronize:true
      }),
    }),
    BooksModule,
    FormsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
