import { Injectable } from '@nestjs/common';
import { CreateYardSaleDto } from './dto/create-yard-sale.dto';
import { UpdateYardSaleDto } from './dto/update-yard-sale.dto';

@Injectable()
export class YardSalesService {
  create(createYardSaleDto: CreateYardSaleDto) {
    return 'This action adds a new yardSale';
  }

  findAll() {
    return `This action returns all yardSales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} yardSale`;
  }

  update(id: number, updateYardSaleDto: UpdateYardSaleDto) {
    return `This action updates a #${id} yardSale`;
  }

  remove(id: number) {
    return `This action removes a #${id} yardSale`;
  }
}
