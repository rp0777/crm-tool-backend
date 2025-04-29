import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Twilio } from 'twilio';

@Injectable()
export class TwilioService {
  private client: Twilio;

  constructor(private configService: ConfigService) {
    const accountSid = this.configService.get<string>('TWILIO_ACCOUNT_SID');
    const authToken = this.configService.get<string>('TWILIO_AUTH_TOKEN');
    this.client = new Twilio(accountSid, authToken);
  }

  async sendSms(to: string, body: string): Promise<any> {
    const from = this.configService.get<string>('TWILIO_PHONE_NUMBER');

    return this.client.messages.create({
      body,
      from,
      to,
    });
  }
}
