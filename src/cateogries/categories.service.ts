import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { Category } from './categories.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category) private categoryRepository: Repository<Category>,
  ) {}

  async find(options?: FindManyOptions<Category>): Promise<Category[]> {
    return await this.categoryRepository.find(options);
  }
}
