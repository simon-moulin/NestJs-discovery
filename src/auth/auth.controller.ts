import { Body, Controller, Post } from "@nestjs/common";
import { AuthSevice } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthSevice) { }

    @Post('/signup')
    signup(@Body() dto: AuthDto) {
        console.log({ dto })
        return this.authService.signup()
    }

    @Post('/signin')
    signin() {
        return this.authService.signin()
    }
}