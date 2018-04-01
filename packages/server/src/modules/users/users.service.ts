import { Component } from '@nestjs/common';
import { IAuth, User } from 'models';
import { InjectModel } from '@nestjs/mongoose';
import { UserSchema } from './users.schema';
import { Model } from 'mongoose';

@Component()
export class UsersService {
    constructor(@InjectModel(UserSchema) private readonly userModel: Model<User>) { }

    async findUserAndPassword(auth: IAuth) {
        return await this.userModel.findOne({
            password: auth.password,
            username: auth.username,
        });
    }

}