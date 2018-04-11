import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpeakersController } from './speakers.controller';
import { SpeakersService } from './speakers.service.';
import { SpeakerSchema } from './speakers.schema';
import { jwtMiddleware } from '../common/middlewares/jwt.middleware';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Speakers', schema: SpeakerSchema }])],
    controllers: [SpeakersController],
    components: [SpeakersService],
    exports: [MongooseModule],
})
export class SpeakersModule implements NestModule {
    public configure(consumer: MiddlewaresConsumer) {
        consumer
            .apply(jwtMiddleware)
            .forRoutes(
                { path: ':eventId/talks/:talkId/speakers', method: RequestMethod.POST },
                { path: ':eventId/talks/:talkId/speakers/:speakerId', method: RequestMethod.PUT },
                { path: ':eventId/talks/:talkId/speakers/:speakerId', method: RequestMethod.DELETE },
        );
    }
}
