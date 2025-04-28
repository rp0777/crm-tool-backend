import { Module } from '@nestjs/common';
import { LeadModule } from './lead/lead.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from './config/configuration';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
