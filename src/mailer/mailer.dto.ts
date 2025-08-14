import { IsEmail, IsString } from "class-validator";

export class SendPasswordResetEmailDTO {
  @IsEmail()
  email: string;

  @IsString()
  resetLink: string;
}