import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLeadDto } from 'src/lead/dto/create-lead.dto';
import { LeadRepository } from 'src/lead/repository/lead.repository';
import { Lead } from 'src/lead/schema/lead.schema';

@Injectable()
export class LeadService {
  private readonly logger = new Logger(LeadService.name);
  constructor(
    @InjectModel(Lead.name)
    private leadModel: Model<Lead>,
    private readonly leadRepository: LeadRepository,
  ) {}

  async createLead(lead: CreateLeadDto) {
    const createdLead = await this.leadRepository.addLead(lead);

    return createdLead;
  }

  async getLeads() {
    const leads = await this.leadRepository.getLeads();

    return leads;
  }
}
