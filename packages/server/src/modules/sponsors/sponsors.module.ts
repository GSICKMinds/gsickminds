import { Module, MiddlewaresConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { jwtMiddleware } from '../common/middlewares/jwt.middleware';
import { SponsorsController } from './sponsors.controller';
import { SponsorsService } from './sponsors.service';
import { SponsorSchema } from './sponsors.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Sponsors', schema: SponsorSchema }])],
    controllers: [SponsorsController],
    components: [SponsorsService],
})
export class SponsorsModule implements NestModule {
    public configure(consumer: MiddlewaresConsumer) {
        consumer
            .apply(jwtMiddleware)
            .forRoutes(
                { path: ':eventId/sponsors', method: RequestMethod.POST },
                { path: ':eventId/sponsors/:sponsorId', method: RequestMethod.PUT },
                { path: ':eventId/sponsors/:sponsorId', method: RequestMethod.DELETE },
        );
    }
}
