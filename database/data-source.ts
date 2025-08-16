import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import databaseConfig from '../configs/database.config';

dotenv.config();

const dbConfing = databaseConfig() as DataSourceOptions;

export const AppDataSource = new DataSource({
  ...dbConfing,
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
});
