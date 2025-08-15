import { Process, Processor } from '@nestjs/bull';
import { type Job } from 'bull';
import { MailerService } from './mailer.service';
import { SendPasswordResetEmailDTO } from './mailer.dto';
import { MAILER_QUEUE } from './mailer.constants';

@Processor(MAILER_QUEUE)
export class MailerProcessor {
  constructor(private readonly mailerService: MailerService) {}

  @Process()
  async sendMail({ data }: Job<SendPasswordResetEmailDTO>) {
    await this.mailerService.sendPasswordResetEmail(data);
  }
}
