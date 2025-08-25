import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { YardSalesService } from './yard-sales.service';
import { CreateYardSaleDto } from './dto/create-yard-sale.dto';
import { UpdateYardSaleDto } from './dto/update-yard-sale.dto';

@Controller('yard-sales')
export class YardSalesController {
  constructor(private readonly yardSalesService: YardSalesService) {}

  @Post()
  create(@Body() createYardSaleDto: CreateYardSaleDto) {
    return this.yardSalesService.create(createYardSaleDto);
  }

  @Get()
  findAll() {
    return this.yardSalesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.yardSalesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateYardSaleDto: UpdateYardSaleDto,
  ) {
    return this.yardSalesService.update(+id, updateYardSaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.yardSalesService.remove(+id);
  }
}
