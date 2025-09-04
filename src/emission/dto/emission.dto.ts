import { FootprintDataDTO } from "../../footprint/dto/footprint-data.dto";

export type EmissionEstimateDataDto = {
  emission_factor: {
    activity_id: string;
    data_version: string;
  } 
  parameters: FootprintDataDTO;
}

export type RequestEmissionEstimateBodyDto = FootprintDataDTO & { 
  activity: number; 
}
