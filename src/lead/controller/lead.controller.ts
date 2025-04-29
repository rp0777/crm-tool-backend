import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LeadService } from '../service/lead/lead.service';
import { CreateLeadDto } from '../dto/create-lead.dto';

@ApiTags('lead')
@ApiBearerAuth()
@Controller('lead')
export class LeadController {
  private readonly logger = new Logger(LeadController.name);
  constructor(private readonly leadService: LeadService) {}

  @Get()
  getLeads() {
    const leads = this.leadService.getLeads();
    this.logger.log('Leads: ', leads);
    return leads;
  }

  @Post()
  createLead(@Body() lead: CreateLeadDto) {
    const createdLead = this.leadService.createLead(lead);

    return createdLead;
  }
}
