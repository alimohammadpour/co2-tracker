import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Footprint } from './footprint.entity';
import { FootprintService } from './footprint.service';
import { Category } from '../activity/entities/category.entity';
import { FootprintRepository } from './footprint.repository';
import { EmissionModule } from 'src/emission/emission.module';
import { FootprintController } from './footprint.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Footprint, Category]),
    EmissionModule,
  ],
  controllers: [FootprintController],
  providers: [FootprintService, FootprintRepository],
  exports: [FootprintService]
})
export class FootprintModule {}
