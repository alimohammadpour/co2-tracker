import { AppDataSource } from "../data-source";
import { CategoryEnum } from "../../src/activity/enum/category.enum";
import { Category } from "../../src/activity/entities/category.entity";
import { Factor } from "../../src/activity/entities/factor.entity";

export const factorsSeeder = async () => {
  const categories: Category[] = await AppDataSource.getRepository(Category).find({
    select: ['id', 'name'],
  });

  const factors: Partial<Factor>[] = [
    { 
      id: 1,
      name: 'Natural gas', 
      description: 'Natural gas emissions', 
      category: categories.find(({ name }) => name == CategoryEnum.ENERGY) ,
      activityId: 'fuel-type_natural_gas-fuel_use_na'
    },
  ];

  await AppDataSource
    .createQueryBuilder()
    .insert()
    .into(Factor)
    .values(factors)
    .orIgnore()
    .execute();
}