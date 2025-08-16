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
import { FootprintModule } from './footprint/footprint.module';
import { CategoryModule } from './cateogries/categories.module';
import databaseConfig from '../configs/database.config';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    MailerModule,
    RedisModule,
    CategoryModule,
    FootprintModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync(typeOrmModuleAsyncOptions()),
    BullModule.forRootAsync(sharedBullAsyncConfig()),
  ]
})
export class AppModule {}
