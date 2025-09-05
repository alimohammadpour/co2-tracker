import { Injectable } from '@nestjs/common';
import { ClimatiqProvider } from './provider/climatiq.provider';
import { ActivityService } from '../activity/activity.service';
import { mapEstimateBodyToEmissionEstimateData } from './emission.mapper';
import { RequestEmissionEstimateBodyDto } from '../footprint/dto/footprint-data.dto';
import { EstimateResponseDto } from './dto/emission.dto';

@Injectable()
export class EmissionService {
  constructor(
    private readonly serviceProvider: ClimatiqProvider,
    private readonly activityService: ActivityService,
  ) {}

  async estimate({ activity, ...parameters }: RequestEmissionEstimateBodyDto): Promise<EstimateResponseDto> {
    const activityId = await this.activityService.findActivityId(activity);
    return await this.serviceProvider.estimate(
      mapEstimateBodyToEmissionEstimateData(activityId, parameters)
    );
  }
}
