import { Injectable } from '@nestjs/common';
import { Footprint } from './footprint.entity';
import { FootprintRepository } from './footprint.repository';
import { CreateFootprintDto } from './dto/footprint-data.dto';
import { EmissionService } from 'src/emission/emission.service';
import { DeepPartial } from 'typeorm';

@Injectable()
export class FootprintService {
  constructor(
    private readonly repository: FootprintRepository,
    private readonly emissionService: EmissionService,
  ) {}

  async create({ userId, estimateBodyDto }: CreateFootprintDto): Promise<Footprint> {
    const { co2e } = await this.emissionService.estimate(estimateBodyDto);

    const { activity, ...footprintFactorData } = estimateBodyDto;
    const createFootprintDto: DeepPartial<Footprint> = {
      user: { id: userId },
      factor: { id: activity },
      data: footprintFactorData,
      co2EKg: co2e
    };
    const footprint = this.repository.create(createFootprintDto);
    return await this.repository.save(footprint);
  }
}
