import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpeakersController } from './speakers.controller';
import { SpeakersService } from './speakers.service.';
import { SpeakerSchema } from './speakers.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Speakers', schema: SpeakerSchema }])],
    controllers: [SpeakersController],
    components: [SpeakersService],
})
export class SpeakersModule { }
/* export class EventsModule implements NestModule {
    public configure(consumer: MiddlewaresConsumer) {
        consumer
            .apply(jwtMiddleware)
            .forRoutes(
                { path: '/events', method: RequestMethod.POST },
                { path: '/events/:id', method: RequestMethod.PUT },
        );
    }
}
 */