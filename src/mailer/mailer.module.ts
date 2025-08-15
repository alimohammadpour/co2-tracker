import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { MailerModule as NestMailerModule } from '@nestjs-modules/mailer';
import { mailerAsyncOptions } from 'configs/mailer.config';
import { BullModule } from '@nestjs/bull';
import { MAILER_QUEUE } from './mailer.constants';
import { MailerProcessor } from './mailer.processor';

@Module({
  imports: [
    NestMailerModule.forRootAsync(mailerAsyncOptions()),
    BullModule.registerQueue({
      name: MAILER_QUEUE,
    }),
  ],
  providers: [MailerService, MailerProcessor],
  exports: [MailerService, BullModule]
})
export class MailerModule {}
