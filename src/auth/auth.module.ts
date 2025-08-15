import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../user/user.module';
import { jwtModuleAsyncOptions } from 'configs/jwt.config';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { MailerModule } from '../mailer/mailer.module';
import { RedisModule } from '../redis/redis.module';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    MailerModule,
    RedisModule,
    JwtModule.registerAsync(jwtModuleAsyncOptions()),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}