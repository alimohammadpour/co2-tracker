import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { EmissionService } from './emission.service';
import { ClimatiqProvider } from './provider/climatiq.provider';
import { ActivityModule } from '../activity/activity.module';

@Module({
  imports: [HttpModule, ActivityModule],
  controllers: [],
  providers: [EmissionService, ClimatiqProvider],
  exports: [EmissionService]
})
export class EmissionModule {}