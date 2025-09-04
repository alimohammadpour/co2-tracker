import { Injectable } from "@nestjs/common";
import { EntityManager, Repository } from "typeorm";
import { InjectEntityManager } from "@nestjs/typeorm";
import { Factor } from "../entities/factor.entity";

@Injectable()
export class FactorRepository extends Repository<Factor> {
  constructor(@InjectEntityManager() private readonly entityManager: EntityManager) {
    super(Factor, entityManager);
  }

  async getActivityId(id: number): Promise<string> {
    const factor = await this.findOne({ where: { id } });
    return factor?.activityId ?? '';
  }
}