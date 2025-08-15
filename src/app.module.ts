import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmModuleAsyncOptions } from 'configs/typeOrm.config';
import { UsersModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MailerModule } from './mailer/mailer.module';
import { RedisModule } from './redis/redis.module';
import { BullModule } from '@nestjs/bull';
import { sharedBullAsyncConfig } from 'configs/queue.config';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MailerModule,
    RedisModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeOrmModuleAsyncOptions()),
    BullModule.forRootAsync(sharedBullAsyncConfig()),
  ]
})
export class AppModule {}
