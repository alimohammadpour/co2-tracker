import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { EmissionService } from './emission.service';
import { EmissionController } from './emission.controller';
import { ClimatiqProvider } from './provider/climatiq.provider';

@Module({
  imports: [HttpModule],
  controllers: [EmissionController],
  providers: [EmissionService, ClimatiqProvider],
  exports: [EmissionService]
})
export class EmissionModule {}