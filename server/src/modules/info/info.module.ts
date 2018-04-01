import { Module, MiddlewaresConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { jwtMiddleware } from '../common/middlewares/jwt.middleware';
import { InfoSchema } from './info.schema';
import { InfoController } from './info.controller';
import { InfoService } from './info.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Info', schema: InfoSchema }])],
    controllers: [InfoController],
    components: [InfoService],
})
/* export class InfoModule implements NestModule {
    public configure(consumer: MiddlewaresConsumer) {
        consumer
            .apply(jwtMiddleware)
            .forRoutes(
                { path: '/info/:id', method: RequestMethod.PUT },
        );
    }
}
 */
export class InfoModule { }