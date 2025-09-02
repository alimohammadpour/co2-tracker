import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';
import { CategoryRepository } from './repositories/category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [ActivityController],
  providers: [ActivityService, CategoryRepository],
  exports: [ActivityService]
})
export class ActivityModule {}
