import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { EmissionService } from './emission.service';

@UseGuards(JwtAuthGuard)
@Controller('emission')
export class EmissionController {
  constructor(private emissionService: EmissionService) {}
}
