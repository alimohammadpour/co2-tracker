import { HttpService } from '@nestjs/axios';
import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosRequestConfig } from 'axios';
import { AxiosError } from 'axios';
import { ClimatiqConfigType, getClimatiqConfig } from 'configs/climatiq.config';
import { ProviderInterface } from './provider.interface';
import { EmissionEstimateDataDto } from '../dto/emission.dto';

@Injectable()
export class ClimatiqProvider implements ProviderInterface {
  private providerConfig: ClimatiqConfigType;

  constructor(
    private readonly http: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.setProviderConfig();
  }

  private setProviderConfig() {
    this.providerConfig = getClimatiqConfig(this.configService);
  }

  private getBaseUrl() {
    return this.providerConfig.baseUrl;
  }

  private getRequestConfig(): AxiosRequestConfig {
    return {
      headers: { 
        Authorization: `Bearer ${this.providerConfig.apiKey}`,
      }
    };
  }
  
  private async post<T>(url: string, emissionData: EmissionEstimateDataDto): Promise<T> {
    try {
      const { data } = await this.http.axiosRef.post(
        `${this.getBaseUrl()}/${url}`,
        emissionData,
        this.getRequestConfig(),
      )
      return data;
    } catch (err) {
      if (err instanceof AxiosError)
        throw new HttpException(err.response?.data.message , err.response?.status || 500);
      throw new BadRequestException('Unable to handle the post request');
    }
  }

  async estimate(estimateData: EmissionEstimateDataDto) {
    return await this.post('estimate', estimateData);
  }
}