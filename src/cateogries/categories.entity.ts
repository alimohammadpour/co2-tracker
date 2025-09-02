import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { CategoriesEnum } from './enum/categories.enum';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'enum', enum: CategoriesEnum })
  name: CategoriesEnum;

  @Column({ nullable: true })
  description?: string;
}
