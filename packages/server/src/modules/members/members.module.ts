import { Module, MiddlewaresConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';
import { MemberSchema } from './members.schema';
import { jwtMiddleware } from '../common/middlewares/jwt.middleware';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Members', schema: MemberSchema }])],
    controllers: [MembersController],
    components: [MembersService],
})

export class MembersModule implements NestModule {
    public configure(consumer: MiddlewaresConsumer) {
        consumer
            .apply(jwtMiddleware)
            .forRoutes(
                { path: '/members', method: RequestMethod.POST },
                { path: '/members/:id', method: RequestMethod.PUT },
                { path: '/members/:id', method: RequestMethod.DELETE },
        );
    }
}
