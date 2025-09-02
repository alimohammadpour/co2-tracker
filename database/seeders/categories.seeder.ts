import { AppDataSource } from "../data-source";
import { Category } from "../../src/cateogries/categories.entity";
import { CategoriesEnum } from "../../src/cateogries/enum/categories.enum";

export const categorySeeder = async () => {
  const categories = [
    { name: CategoriesEnum.ENERGY, description: 'Energy emissions' },
  ];

  await AppDataSource.getRepository(Category).insert(categories);
}