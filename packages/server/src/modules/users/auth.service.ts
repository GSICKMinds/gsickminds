import * as jwt from 'jsonwebtoken';
import { Component, UnauthorizedException } from '@nestjs/common';
import { IAuth } from 'models';
import { UsersService } from './users.service';

@Component()
export class AuthService {
    constructor(private readonly usersService: UsersService) { }

    async getToken(auth: IAuth) {
        const user = await this.usersService.findUserAndPassword(auth);
        if (!user) throw new UnauthorizedException();

        const token = jwt.sign({ username: user.username, _id: user._id }, process.env.SECRET, { expiresIn: parseInt(process.env.EXPIRES_IN, 10) });

        return { access_token: token };

    }

    async validateUser(auth): Promise<boolean> {
        return true;
    }
}