import { AppDataSource } from "../data-source";
import { CategoryEnum } from "../../src/activity/enum/category.enum";
import { Category } from "../../src/activity/entities/category.entity";

export const categorySeeder = async () => {
  const categories: Partial<Category>[] = [
    { id: 1, name: CategoryEnum.ENERGY, description: 'Energy emissions' },
  ];

  await AppDataSource.getRepository(Category).insert(categories);
}