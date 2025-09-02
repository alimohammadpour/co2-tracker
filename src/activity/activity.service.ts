import { Injectable } from '@nestjs/common';
import { FindManyOptions, Repository } from 'typeorm';
import { CategoryRepository } from './repositories/category.repository';
import { Category } from './entities/category.entity';

@Injectable()
export class ActivityService {
  constructor(
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async findCategories(options?: FindManyOptions<Category>): Promise<Category[]> {
    return await this.categoryRepository.find(options);
  }
}
