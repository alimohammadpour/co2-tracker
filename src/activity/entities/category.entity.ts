import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CategoryEnum } from '../enum/category.enum';
import { Factor } from './factor.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: CategoryEnum })
  name: CategoryEnum;

  @Column({ nullable: true })
  description?: string;

  @OneToMany(() => Factor, (factor) => factor.category)
  factors: Factor[];
}
