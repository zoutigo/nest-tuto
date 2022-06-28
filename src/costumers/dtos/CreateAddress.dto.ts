import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty()
  line1: string;

  @IsNotEmpty()
  line2: number;

  @IsNotEmpty()
  zip: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  state: string;
}
