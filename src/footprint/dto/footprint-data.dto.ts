import { 
  DistanceUnitEnum, 
  FuelSourceUnitEnum, 
  TransportMethodEnum, 
  WeightUnitEnum 
} from "../enum/footprint-data.enum";

export type VehicleData = {
  vehicle_model_id: string;
  distance_unit: DistanceUnitEnum;
  distance_value: number;
};

export type FlightLegData = {
    departure_airport: string; 
    destination_airport: string 
}
export type FlightData = {
  passengers: number;
  legs: FlightLegData[];
};

export type ShippingData = {
  weight_value: number;
  weight_unit: WeightUnitEnum;
  distance_value: number;
  distance_unit: DistanceUnitEnum;
  transport_method: TransportMethodEnum;
};

export type FuelCombustionData = {
  fuel_source_type: string;
  fuel_source_unit: FuelSourceUnitEnum;
  fuel_source_value: number;
};

export type FootprintDataDTO =
  | VehicleData
  | FlightData
  | ShippingData
  | FuelCombustionData;