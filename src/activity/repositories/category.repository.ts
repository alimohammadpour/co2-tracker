import { Injectable } from "@nestjs/common";
import { Category } from "../entities/category.entity";
import { EntityManager, Repository } from "typeorm";
import { InjectEntityManager } from "@nestjs/typeorm";

@Injectable()
export class CategoryRepository extends Repository<Category> {
  constructor(@InjectEntityManager() private readonly entityManager: EntityManager) {
    super(Category, entityManager);
  }
}