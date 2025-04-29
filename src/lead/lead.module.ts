import { Module } from '@nestjs/common';
import { LeadController } from './controller/lead.controller';
import { LeadService } from './service/lead/lead.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LeadSchema } from './schema/lead.schema';
import { LeadRepository } from './repository/lead.repository';
import { TwilioService } from 'src/twilio/twilio.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Lead', schema: LeadSchema }])],
  controllers: [LeadController],
  providers: [LeadService, LeadRepository, TwilioService],
})
export class LeadModule {}
