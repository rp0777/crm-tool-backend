import { Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Lead } from '../schema/lead.schema';
import { Model } from 'mongoose';

export class LeadRepository {
  private readonly logger = new Logger(LeadRepository.name);
  constructor(
    @InjectModel(Lead.name)
    private leadModel: Model<Lead>,
  ) {}

  async addLead(lead: Lead) {
    this.logger.log('Creating a new lead with name: ' + lead.name);
    const createdLead = new this.leadModel(lead);

    this.logger.log('Saving the lead');

    const res = await createdLead.save();

    this.logger.log('Response from saving the lead: ', res);

    return createdLead;
  }

  async getLeads() {
    this.logger.log('Getting all the leads');
    const leads = await this.leadModel.find();

    this.logger.log('Leads: ', leads);

    return leads;
  }
}
