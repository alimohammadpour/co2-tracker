import { AppDataSource } from '../data-source';
import { categorySeeder } from './categories.seeder';
import { factorsSeeder } from './factors.seeder';

async function runSeeder() {
  await AppDataSource.initialize();

  await categorySeeder();

  await factorsSeeder();

  await AppDataSource.destroy();
}

runSeeder().catch((err) => {
  console.error('Seeder failed:', err);
});
