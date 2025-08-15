import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { RedisBlocklistService } from '../redis/redis-blocklist.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService, private blocklist: RedisBlocklistService) {
    const secretOrKey = configService.get<string>('JWT_SECRET');
    if (!secretOrKey) {
        throw new Error('JWT_SECRET is missing');
    }
    super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey,
    });
  }

  async validate(payload: any) {
    const { jti } = payload;
    if (!jti) {
      throw new UnauthorizedException('Missing jti');
    }
    const blocked = await this.blocklist.isBlocked(jti);
    if (blocked) {
      throw new UnauthorizedException('Token has been revoked');
    }

    return { userId: payload.sub, username: payload.username, jti, exp: payload.exp };
  }
}