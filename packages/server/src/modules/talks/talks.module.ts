import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TalksService } from './talks.service';
import { TalksController } from './talks.controller';
import { TalkSchema } from './talks.schema';
import { jwtMiddleware } from '../common/middlewares/jwt.middleware';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Talks', schema: TalkSchema }])],
    controllers: [TalksController],
    components: [TalksService],
})
export class TalksModule implements NestModule {
    public configure(consumer: MiddlewaresConsumer) {
        consumer
            .apply(jwtMiddleware)
            .forRoutes(
                { path: ':eventId/talks', method: RequestMethod.POST },
                { path: ':eventId/talks/:talkId', method: RequestMethod.PUT },
        );
    }
}
