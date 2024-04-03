/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Form } from './entities/form.entity';

@Injectable()
export class FormsService {
  constructor(
    @InjectRepository(Form)
    private readonly formRepository: Repository<Form>,
  ) {}

  async create(createFormDto: CreateFormDto) {
    const form = this.formRepository.create(createFormDto);
    return await this.formRepository.save(form);
  }

  async findAll() {
    return await this.formRepository.find();
  }

  async findOne(id: number) {
    return await this.formRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateFormDto: UpdateFormDto) {
    const formm = await this.formRepository.findOne({
      where: {
        id,
      },
    });

    if (!formm) {
      throw new NotFoundException();
    }

    Object.assign(formm, updateFormDto);
    return await this.formRepository.save(formm);
  }

  async remove(id: number) {
    const formm = await this.formRepository.findOne({
      where: {
        id,
      },
    });
    if (!formm) {
      throw new NotFoundException();
    }
    return await this.formRepository.remove(formm);
  }
}
