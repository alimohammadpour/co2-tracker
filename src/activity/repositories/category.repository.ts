import { Injectable } from "@nestjs/common";
import { Category } from "../entities/category.entity";
import { EntityManager, Repository } from "typeorm";
import { InjectEntityManager } from "@nestjs/typeorm";
import { Factor } from "../entities/factor.entity";

@Injectable()
export class CategoryRepository extends Repository<Category> {
  constructor(@InjectEntityManager() private readonly entityManager: EntityManager) {
    super(Category, entityManager);
  }

  async findFactors(id: number): Promise<Factor[]> {
    const category = await this.findOne({
        where: { id },
        relations: ['factors']
    });

    return category?.factors ?? [];
  }
}