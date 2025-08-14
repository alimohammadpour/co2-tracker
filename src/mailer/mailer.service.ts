import { Injectable } from '@nestjs/common';
import { MailerService as NestMailerService } from '@nestjs-modules/mailer';
import { SendPasswordResetEmailDTO } from './mailer.dto';
import { SentMessageInfo } from 'nodemailer';

@Injectable()
export class MailerService {
  constructor(private mailerService: NestMailerService) {}

  async sendPasswordResetEmail({ email, resetLink }: SendPasswordResetEmailDTO): Promise<SentMessageInfo> {
    // TODO: Use email templates
    return await this.mailerService.sendMail({
      to: email,
      subject: 'Password Reset Request',
      text: `Click here to reset your password: ${resetLink}`,
    });
  }
}
