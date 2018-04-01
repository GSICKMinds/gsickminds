import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsModule } from './modules/event/events.module';
import { MembersModule } from './modules/members/members.module';
import { AuthModule } from './modules/users/auth.module';
import { InfoModule } from './modules/info/info.module';
import { SpeakersModule } from './modules/speakers/speakers.module';
import { TalksModule } from './modules/talks/talks.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), EventsModule, MembersModule, AuthModule, InfoModule, SpeakersModule, TalksModule],
})
export class AppModule { }
