import { EnergyUnitEnum } from "../enum/footprint-data.enum";
import { User } from "../../user/user.entity";

export type EnergyEmissionData = {
  energy: number;
  energy_unit: EnergyUnitEnum;
};

export type FootprintDataDTO = EnergyEmissionData

export type RequestEmissionEstimateBodyDto = FootprintDataDTO & { 
  activity: number; 
}

export type CreateFootprintDto = {
  userId: number,
  estimateBodyDto: RequestEmissionEstimateBodyDto,
}