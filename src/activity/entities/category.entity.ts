import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { CategoryEnum } from '../enum/category.enum';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'enum', enum: CategoryEnum })
  name: CategoryEnum;

  @Column({ nullable: true })
  description?: string;
}
