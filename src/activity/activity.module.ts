import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';
import { CategoryRepository } from './repositories/category.repository';
import { FactorRepository } from './repositories/factor.repository';
import { Factor } from './entities/factor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Factor])],
  controllers: [ActivityController],
  providers: [ActivityService, CategoryRepository, FactorRepository],
  exports: [ActivityService]
})
export class ActivityModule {}
