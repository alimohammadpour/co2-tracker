import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ActivityService } from './activity.service';
import { Category } from './entities/category.entity';
import { Factor } from './entities/factor.entity';

@UseGuards(JwtAuthGuard)
@Controller('activities')
export class ActivityController {
  constructor(private service: ActivityService) {}

  @Get('categories')
  async findCategories(): Promise<Category[]> {
    return await this.service.findCategories();
  }

  @Get(':categoryId/factors')
  async findCategoryFactors(@Param('categoryId') categoryId: number): Promise<Factor[]> {
    return await this.service.findCategoryFactors(categoryId);
  }
}
