import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanyInput {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly budget: number;

  @ApiProperty()
  readonly description: string;
}
