import { IsString } from 'class-validator';
import { User } from 'src/user/user.entity';

export class LoginDto {
  @IsString()
  username: string;

  @IsString()
  password: string;
}

export type ValidatedUserDto = Omit<User, 'password'>;