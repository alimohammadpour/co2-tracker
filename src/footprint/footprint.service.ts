import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository, UpdateResult } from 'typeorm';
import { Footprint } from './footprint.entity';

@Injectable()
export class FootprintService {
  constructor(
    @InjectRepository(Footprint)
    private footprintRepository: Repository<Footprint>,
  ) {}
}
