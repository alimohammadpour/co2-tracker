import { AppDataSource } from "../data-source";
import { Category } from "../../src/cateogries/categories.entity";
import { CategoriesEnum } from "../../src/cateogries/enum/categories.enum";

export const categorySeeder = async () => {
  const categories = [
    { name: CategoriesEnum.VEHICLE, description: 'Transportation' },
    { name: CategoriesEnum.FLIGHT, description: 'Flight emissions' },
    { name: CategoriesEnum.SHIPPING, description: 'Freight and cargo transportation' },
    { name: CategoriesEnum.FUEL_COMBUSTION, description: 'Fuel usage for heating or electricity' },
  ];

  await AppDataSource.getRepository(Category).insert(categories);
}