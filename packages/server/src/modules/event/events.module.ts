import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { jwtMiddleware } from '../common/middlewares/jwt.middleware';
import { EventsController } from './events.controller';
import { EventsService } from './events.service.';
import { EventSchema } from './events.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Events', schema: EventSchema }])],
    controllers: [EventsController],
    components: [EventsService],
})

export class EventsModule implements NestModule {
    public configure(consumer: MiddlewaresConsumer) {
        consumer
            .apply(jwtMiddleware)
            .forRoutes(
                { path: '/events', method: RequestMethod.POST },
                { path: '/events/:id', method: RequestMethod.PUT },
        );
    }
}
