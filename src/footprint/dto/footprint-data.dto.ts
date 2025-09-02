import { EnergyUnitEnum } from "../enum/footprint-data.enum";

export type EnergyEmissionData = {
  energy: number;
  energy_unit: EnergyUnitEnum;
};

export type FootprintDataDTO = EnergyEmissionData