import { Controller, Post, Body, UnauthorizedException, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, ResetPasswordDto } from './auth.dto';
import { CreateUserDto } from 'src/user/user.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.authService.validateUser(loginDto);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  async logout(@Req() { user }: any) {
    return this.authService.logout(user);
  }

  @Post('request-password-reset')
  async requestPasswordReset(@Body('email') email: string) {
    return await this.authService.sendResetPasswordToken(email);
  }

  @Post('reset-password')
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return await this.authService.resetPassword(resetPasswordDto);
  }
}
