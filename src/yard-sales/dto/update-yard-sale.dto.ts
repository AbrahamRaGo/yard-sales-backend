import { PartialType } from '@nestjs/mapped-types';
import { CreateYardSaleDto } from './create-yard-sale.dto';

export class UpdateYardSaleDto extends PartialType(CreateYardSaleDto) {}
