import { ApiProperty } from '@nestjs/swagger';

export class UserCreatedDto {
  @ApiProperty({ example: '1' })
  id: number;

  @ApiProperty({ example: 'Jesus' })
  name: string;
}
