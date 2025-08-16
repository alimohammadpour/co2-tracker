import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './categories.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [],
  exports: []
})
export class CategoryModule {}
