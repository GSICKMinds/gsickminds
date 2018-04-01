import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './users.schema';
import { UsersService } from './users.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }])],
    components: [AuthService, JwtStrategy, UsersService],
    controllers: [AuthController],

})
export class AuthModule { }