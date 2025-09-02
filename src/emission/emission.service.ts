import { Injectable } from '@nestjs/common';
import { ClimatiqProvider } from './provider/climatiq.provider';

@Injectable()
export class EmissionService {
  constructor(private readonly serviceProvider: ClimatiqProvider) {}

  async estimate(estimateData: any) {
    return await this.serviceProvider.estimate(estimateData);
  }
}
