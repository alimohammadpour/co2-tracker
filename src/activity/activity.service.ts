import { Injectable } from '@nestjs/common';
import { FindManyOptions, Repository } from 'typeorm';
import { CategoryRepository } from './repositories/category.repository';
import { Category } from './entities/category.entity';
import { Factor } from './entities/factor.entity';
import { FactorRepository } from './repositories/factor.repository';

@Injectable()
export class ActivityService {
  constructor(
    private readonly categoryRepository: CategoryRepository,
    private readonly factorRepository: FactorRepository,
  ) {}

  async findCategories(options?: FindManyOptions<Category>): Promise<Category[]> {
    return await this.categoryRepository.find(options);
  }

  async findCategoryFactors(id: number): Promise<Factor[]> {
    return await this.categoryRepository.findFactors(id);
  }

  async findActivityId(factorId: number): Promise<string> {
    return await this.factorRepository.getActivityId(factorId);
  }
}
