import { Body, Controller, Post } from '@nestjs/common';
import { AuthSevice } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthSevice) {}

  @Post('/signup')
  async signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Post('/signin')
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
