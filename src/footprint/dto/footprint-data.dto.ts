import { EnergyUnitEnum, VolumeUnitEnum, WeightUnitEnum } from "../enum/footprint-data.enum";

export type EnergyEmissionData = {
  energy: number;
  energy_unit: EnergyUnitEnum;
};

export type FoodEmissionData = {
  weight: number,
	weight_unit: WeightUnitEnum,
} | {
  volume: number,
  volume_unit: VolumeUnitEnum,
}

export type FootprintDataDTO = EnergyEmissionData | FoodEmissionData;

export type RequestEmissionEstimateBodyDto = FootprintDataDTO & { 
  activity: number; 
}

export type CreateFootprintDto = {
  userId: number,
  estimateBodyDto: RequestEmissionEstimateBodyDto,
}