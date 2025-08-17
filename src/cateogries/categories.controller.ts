import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CategoryService } from './categories.service';
import { Category } from './categories.entity';

@UseGuards(JwtAuthGuard)
@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  async find(): Promise<Category[]> {
    return await this.categoryService.find();
  }
}
