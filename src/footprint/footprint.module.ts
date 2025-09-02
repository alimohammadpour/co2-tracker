import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Footprint } from './footprint.entity';
import { FootprintService } from './footprint.service';
import { Category } from '../activity/entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Footprint, Category])],
  providers: [FootprintService],
  exports: [FootprintService]
})
export class FootprintModule {}
