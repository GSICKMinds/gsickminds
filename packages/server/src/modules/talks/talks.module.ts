import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TalksService } from './talks.service';
import { TalksController } from './talks.controller';
import { TalkSchema } from './talks.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Talks', schema: TalkSchema }])],
    controllers: [TalksController],
    components: [TalksService],
})
export class TalksModule { }
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