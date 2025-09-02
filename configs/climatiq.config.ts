import { ConfigService } from "@nestjs/config";

export type ClimatiqConfigType = { apiKey: string; baseUrl: string };

export const getClimatiqConfig = (configService: ConfigService): ClimatiqConfigType => {
  return {
    apiKey: configService.get<string>('CLIMATIQ_API_KEY') || '',
    baseUrl: configService.get<string>('CLIMATIQ_BASE_URL') || ''
  }
}