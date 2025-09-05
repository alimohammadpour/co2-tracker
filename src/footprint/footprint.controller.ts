import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { FootprintService } from './footprint.service';
import type { RequestEmissionEstimateBodyDto } from './dto/footprint-data.dto';
import type { AuthRequest } from '../auth/auth.dto';
import { Footprint } from './footprint.entity';

@UseGuards(JwtAuthGuard)
@Controller('footprints')
export class FootprintController {
  constructor(private footprintService: FootprintService) {}

  @Post()
  async create(
    @Req() { user: { userId } }: AuthRequest,
    @Body() estimateBodyDto: RequestEmissionEstimateBodyDto
  ): Promise<Footprint> {
    return this.footprintService.create({ userId, estimateBodyDto });
  }

  @Get()
  async find(
    @Req() { user: { userId } }: AuthRequest,
  ): Promise<Footprint[]> {
    return this.footprintService.find(userId);
  }
}
