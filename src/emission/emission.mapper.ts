import { FootprintDataDTO } from "../footprint/dto/footprint-data.dto";
import { EmissionEstimateDataDto } from "./dto/emission.dto";

export const mapEstimateBodyToEmissionEstimateData = (
    activityId: string,
    parameters: FootprintDataDTO,
): EmissionEstimateDataDto => {
    return {
        emission_factor: {
            activity_id: activityId,
            data_version: "^0",
        },
        parameters
    }
}