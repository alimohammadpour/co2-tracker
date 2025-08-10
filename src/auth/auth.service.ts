import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LoginDto, ValidatedUserDto } from './auth.dto';
import { CreateUserDto } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';
import { v4 as uuidv4 } from 'uuid';
import { RedisBlocklistService } from './redis-blocklist.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService, 
    private userService: UserService,
    private blocklist: RedisBlocklistService,
  ) {}

  async register({ username, email, password }: CreateUserDto): Promise<ValidatedUserDto> {
    const existing = await this.userService.findOne({
      where: [{ username }, { email }],
    });

    if (existing) {
      throw new ConflictException('Username or email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await this.userService.create({ username, email, password: hashedPassword });

    const { password: _, ...result } = newUser;
    return result;
  }

  async validateUser({ username, password }: LoginDto): Promise<ValidatedUserDto | null> {
    const user = await this.userService.findOne({ where: { username } });
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login({ id, username }: ValidatedUserDto) {
    const jti = uuidv4();
    const payload = { username, sub: id };
    return {
      access_token: this.jwtService.sign(payload, { jwtid: jti }),
    };
  }

  async logout({ jti, exp }: any) {
    const now = Math.floor(Date.now() / 1000);
    const ttl = exp - now;
    if (ttl > 0) {
      await this.blocklist.add(jti, ttl);
    }
    return { message: 'Logged out' };
  }
}