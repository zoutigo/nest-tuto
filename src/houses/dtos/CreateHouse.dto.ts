import { IsEmail, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreateHouseDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @MinLength(3, {
    message: 'Le nom de la ville doit avoir au moins 3 caractères',
  })
  @MaxLength(20, {
    message: 'Le nom de la ville doit avoir au plus 20 caractères',
  })
  name: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  country: string;
}
