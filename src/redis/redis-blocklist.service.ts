import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisBlocklistService {
  constructor(@Inject('REDIS_CLIENT') private readonly redis: Redis) {}

  async add(jti: string, ttlSeconds: number) {
    if (ttlSeconds <= 0) return;
    await this.redis.set(jti, 'revoked', 'EX', ttlSeconds);
  }

  async isBlocked(jti: string) {
    if (!jti) return false;
    return (await this.redis.get(jti)) !== null;
  }
}
