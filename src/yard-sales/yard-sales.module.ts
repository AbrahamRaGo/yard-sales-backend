import { Module } from '@nestjs/common';
import { YardSalesService } from './yard-sales.service';
import { YardSalesController } from './yard-sales.controller';

@Module({
  controllers: [YardSalesController],
  providers: [YardSalesService],
})
export class YardSalesModule {}
