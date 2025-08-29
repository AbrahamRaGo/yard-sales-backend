import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class RegisterUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsPhoneNumber('US')
  @IsOptional()
  phone?: string;

  @ApiProperty({
    description:
      'Password must be 8 character long with 1 lowercase, 1 uppercase, 1 symbol and 2 numbers',
  })
  @IsStrongPassword(
    {
      minLength: 8,
      minNumbers: 2,
      minUppercase: 1,
      minLowercase: 1,
      minSymbols: 1,
    },
    {
      message:
        'Password must be 8 character long with 1 lowercase, 1 uppercase, 1 symbol and 2 numbers',
    },
  )
  password: string;
}
