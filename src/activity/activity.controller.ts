import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ActivityService } from './activity.service';
import { Category } from './entities/category.entity';

@UseGuards(JwtAuthGuard)
@Controller('activities')
export class ActivityController {
  constructor(private service: ActivityService) {}

  @Get('categories')
  async find(): Promise<Category[]> {
    return await this.service.findCategories();
  }
}
