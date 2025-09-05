import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { type FootprintDataDTO } from './dto/footprint-data.dto';
import { Factor } from '../activity/entities/factor.entity';

@Entity('footprints')
export class Footprint {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.footprints)
  @JoinColumn({ name: 'user_id' })
  user: User;
  
  @ManyToOne(() => Factor, { nullable: false })
  @JoinColumn({ name: 'factor_id' })
  factor: Factor;

  @Column({ type: 'json', nullable: false })
  data: FootprintDataDTO;

  @Column({ type: 'float', nullable: false, name: 'co2e_kg' })
  co2EKg: number;
}
