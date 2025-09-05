import { IsString } from 'class-validator';
import { Request } from 'express';
import { User } from 'src/user/user.entity';

export class LoginDto {
  @IsString()
  username: string;

  @IsString()
  password: string;
}

export type ValidatedUserDto = Omit<User, 'password'>;

export class ResetPasswordDto {
  @IsString()
  token: string;

  @IsString()
  newPassword: string;
}

export type JWTAuthUserPayload = {
  userId: number;
  username: string;
  jti: string;
  exp: number;
}

export type AuthUserPayload = JWTAuthUserPayload;

export interface AuthRequest extends Request {
  user: AuthUserPayload;
}