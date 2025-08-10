import { ConfigService } from "@nestjs/config";

export const getRedisUrl = (config: ConfigService): string => {
    return config.get<string>('REDIS_URL') || 'redis://localhost:6379';
}