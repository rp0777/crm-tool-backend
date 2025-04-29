import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateLeadDto } from 'src/lead/dto/create-lead.dto';
import { SmsDataDto } from 'src/lead/dto/sms-data.dto';
import { LeadRepository } from 'src/lead/repository/lead.repository';
import { Lead } from 'src/lead/schema/lead.schema';
import { TwilioService } from 'src/twilio/twilio.service';

@Injectable()
export class LeadService {
  private readonly logger = new Logger(LeadService.name);
  constructor(
    @InjectModel(Lead.name)
    private readonly leadRepository: LeadRepository,
    private readonly twilioService: TwilioService,
  ) {}

  async createLead(lead: CreateLeadDto) {
    const createdLead = await this.leadRepository.addLead(lead);

    return createdLead;
  }

  async getLeads() {
    const leads = await this.leadRepository.getLeads();

    return leads;
  }

  async sendSms({ phoneNumber, message }: SmsDataDto) {
    await this.twilioService.sendSms(phoneNumber, `${message}`);
  }
}
