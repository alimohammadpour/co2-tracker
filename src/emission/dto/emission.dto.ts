import { FootprintDataDTO } from "../../footprint/dto/footprint-data.dto";

export type EmissionEstimateDataDto = {
  emission_factor: {
    activity_id: string;
    data_version: string;
  } 
  parameters: FootprintDataDTO;
}

export type EstimateResponseDto = {
  co2e: number;
  [key: string]: any
};
