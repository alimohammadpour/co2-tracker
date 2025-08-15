import { Global, Module } from '@nestjs/common';
import Redis from 'ioredis';
import { ConfigService } from '@nestjs/config';
import { getRedisUrl } from 'configs/redis.config';
import { RedisBlocklistService } from './redis-blocklist.service';
import { REDIS_CLIENT } from './redis.constants';

@Global()
@Module({
  providers: [
    {
      provide: REDIS_CLIENT,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => new Redis(
        getRedisUrl(configService)
      )
    },
    RedisBlocklistService,
  ],
  exports: [REDIS_CLIENT, RedisBlocklistService],
})

export class RedisModule {}
