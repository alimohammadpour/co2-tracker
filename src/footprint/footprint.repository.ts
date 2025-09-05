import { Injectable } from "@nestjs/common";
import { EntityManager, Repository } from "typeorm";
import { InjectEntityManager } from "@nestjs/typeorm";
import { Footprint } from "./footprint.entity";

@Injectable()
export class FootprintRepository extends Repository<Footprint> {
  constructor(@InjectEntityManager() private readonly entityManager: EntityManager) {
    super(Footprint, entityManager);
  }
}