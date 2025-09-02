import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { type FootprintDataDTO } from './dto/footprint-data.dto';
import { Category } from '../activity/entities/category.entity';

@Entity('footprints')
export class Footprint {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.footprints)
  user: User;
  
  @ManyToOne(() => Category, { nullable: false })
  category: Category;

  @Column({ type: 'json' })
  data: FootprintDataDTO;

  @Column({ type: 'float', nullable: true, name: 'co2e_kg' })
  co2EKg?: number;
}
