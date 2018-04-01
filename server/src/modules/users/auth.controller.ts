
import { AuthService } from './auth.service';
import { Controller, Post, Body } from '@nestjs/common';
import { IAuth } from 'models';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('token')
    async getToken(@Body() auth: IAuth): Promise<any> {
        return await this.authService.getToken(auth);
    }
}
