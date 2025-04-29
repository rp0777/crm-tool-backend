import { IsNotEmpty, IsString } from 'class-validator';

export class SmsDataDto {
  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  message: string;
}
