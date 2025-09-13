import { AppDataSource } from "../data-source";
import { CategoryEnum } from "../../src/activity/enum/category.enum";
import { Category } from "../../src/activity/entities/category.entity";
import { Factor } from "../../src/activity/entities/factor.entity";

export const factorsSeeder = async () => {
  const categories: Category[] = await AppDataSource.getRepository(Category).find({
    select: ['id', 'name'],
  });

  const foodCategory = categories.find(({ name }) => name == CategoryEnum.FOOD);

  const factors: Partial<Factor>[] = [
    { 
      id: 1,
      name: 'Multi-family home', 
      description: 'Multi-family home - Energy consumption', 
      category: categories.find(({ name }) => name == CategoryEnum.ENERGY) ,
      activityId: 'real_estate_energy_consumption-type_multi_family_home'
    },
    { 
      id: 2,
      name: 'Bread', 
      description: 'Emission intensity of bread', 
      category: foodCategory,
      activityId: 'food-type_bread'
    },
    { 
      id: 3,
      name: 'Coffee', 
      description: 'Emission intensity of coffee - Global', 
      category: foodCategory,
      activityId: 'food-type_coffee-origin_region_global'
    },
    { 
      id: 4,
      name: 'Milk', 
      description: 'Emission intensity of milk - Global', 
      category: foodCategory,
      activityId: 'food-type_milk-origin_region_global'
    },
    { 
      id: 5,
      name: 'Milk - skimmed/with chocolate/UHT', 
      description: 'Emission intensity of milk - skimmed/with chocolate/UHT', 
      category: foodCategory,
      activityId: 'food-type_milk_skimmed_with_chocolate_uht'
    },
    { 
      id: 6,
      name: 'Beer', 
      description: 'Emission intensity of beer - Global', 
      category: foodCategory,
      activityId: 'food-type_barley_beer-origin_region_global'
    },
    { 
      id: 7,
      name: 'Vodka', 
      description: 'Emission intensity of vodka', 
      category: foodCategory,
      activityId: 'food-type_vodka'
    },
    { 
      id: 8,
      name: 'Whisky', 
      description: 'Emission intensity of whisky - France', 
      category: foodCategory,
      activityId: 'food-type_whisky'
    },
    { 
      id: 9,
      name: 'Wine grapes - Wine', 
      description: 'Emission intensity of wine grapes (wine) - global', 
      category: foodCategory,
      activityId: 'food-type_wine_grapes_wine-origin_region_global'
    },
    { 
      id: 10,
      name: 'Wine - White', 
      description: 'Emission intensity of wine (white)', 
      category: foodCategory,
      activityId: 'food-type_wine_white'
    },
    { 
      id: 11,
      name: 'Wine - Red', 
      description: 'Emission intensity of wine (red)', 
      category: foodCategory,
      activityId: 'food-type_wine_red'
    },
    { 
      id: 12,
      name: 'Wine - Rose', 
      description: 'Emission intensity of wine (rose)', 
      category: foodCategory,
      activityId: 'food-type_wine_rose'
    },
    { 
      id: 13,
      name: 'Wine - white/sparkling/champagne', 
      description: 'Emission intensity of wine - white/sparkling/champagne', 
      category: foodCategory,
      activityId: 'food-type_wine_white_sparkling_champagne'
    },
    { 
      id: 14,
      name: 'Water - bottled/carbonated', 
      description: 'Emission intensity of water - bottled/carbonated', 
      category: foodCategory,
      activityId: 'food-type_water_bottled_carbonated'
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