import { SharedBullAsyncConfiguration } from "@nestjs/bull";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { getRedisUrl } from "./redis.config";

export const sharedBullAsyncConfig = (): SharedBullAsyncConfiguration => {
    return {
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        url: getRedisUrl(configService),
      }),
    }
}