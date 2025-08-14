import { Module } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { MailerModule as NestMailerModule } from '@nestjs-modules/mailer';
import { mailerAsyncOptions } from 'configs/mailer.config';

@Module({
  imports: [
    NestMailerModule.forRootAsync(mailerAsyncOptions())
  ],
  providers: [MailerService],
  exports: [MailerService]
})
export class MailerModule {}
