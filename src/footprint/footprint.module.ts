import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Footprint } from './footprint.entity';
import { Category } from '../cateogries/categories.entity';
import { FootprintService } from './footprint.service';

@Module({
  imports: [TypeOrmModule.forFeature([Footprint, Category])],
  providers: [FootprintService],
  exports: [FootprintService]
})
export class FootprintModule {}
