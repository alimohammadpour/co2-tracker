import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Footprint } from './footprint.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Footprint])],
  providers: [],
  exports: []
})
export class FootprintModule {}
