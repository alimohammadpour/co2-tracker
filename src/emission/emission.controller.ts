import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { EmissionService } from './emission.service';
import type { RequestEmissionEstimateBodyDto } from './dto/emission.dto';

// @UseGuards(JwtAuthGuard)
@Controller('emission')
export class EmissionController {
  constructor(private emissionService: EmissionService) {}

  @Post('estimate')
  async register(@Body() estimateBodyDto: RequestEmissionEstimateBodyDto) {
    return this.emissionService.estimate(estimateBodyDto);
  }
}
