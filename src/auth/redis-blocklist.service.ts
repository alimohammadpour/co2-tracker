import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { getRedisUrl } from 'configs/redis.config';
import Redis from 'ioredis';

@Injectable()
export class RedisBlocklistService implements OnModuleInit, OnModuleDestroy {
  private redis: Redis;

  constructor(private config: ConfigService) {}

  onModuleInit() {
    this.redis = new Redis(getRedisUrl(this.config));
  }

  async add(jti: string, ttlSeconds: number) {
    if (ttlSeconds <= 0) return;
    await this.redis.set(jti, 'revoked', 'EX', ttlSeconds);
  }

  async isBlocked(jti: string) {
    if (!jti) return false;
    return (await this.redis.get(jti)) !== null;
  }

  async onModuleDestroy() {
    await this.redis.quit();
  }
}
