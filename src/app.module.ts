import { Module } from '@nestjs/common';
import { LeadModule } from './lead/lead.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from './config/configuration';
import { TwilioModule } from './twilio/twilio.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('dbUrl'),
      }),
      inject: [ConfigService],
    }),
    LeadModule,
    TwilioModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
