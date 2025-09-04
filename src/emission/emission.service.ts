import { Injectable } from '@nestjs/common';
import { ClimatiqProvider } from './provider/climatiq.provider';
import { RequestEmissionEstimateBodyDto } from './dto/emission.dto';
import { ActivityService } from '../activity/activity.service';
import { mapEstimateBodyToEmissionEstimateData } from './emission.mapper';

@Injectable()
export class EmissionService {
  constructor(
    private readonly serviceProvider: ClimatiqProvider,
    private readonly activityService: ActivityService,
  ) {}

  async estimate({ activity, ...parameters }: RequestEmissionEstimateBodyDto) {
    const activityId = await this.activityService.findActivityId(activity);
    return await this.serviceProvider.estimate(
      mapEstimateBodyToEmissionEstimateData(activityId, parameters)
    );
  }
}
