import { Injectable } from "@nestjs/common";
import { EntityManager, Repository } from "typeorm";
import { InjectEntityManager } from "@nestjs/typeorm";
import { Footprint } from "./footprint.entity";

@Injectable()
export class FootprintRepository extends Repository<Footprint> {
  constructor(@InjectEntityManager() private readonly entityManager: EntityManager) {
    super(Footprint, entityManager);
  }

  async findUserWithFactors(userId: number): Promise<Footprint[]> {
    return await this.find({
      where: { user: { id: userId } },
      order: { id: 'DESC' },
      relations: ['factor'],
    });
  }
}