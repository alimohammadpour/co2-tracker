import { AppDataSource } from '../data-source';
import { categorySeeder } from './categories.seeder';

async function runSeeder() {
  await AppDataSource.initialize();

  await categorySeeder();

  await AppDataSource.destroy();
}

runSeeder().catch((err) => {
  console.error('Seeder failed:', err);
});
