import { Test, TestingModule } from '@nestjs/testing';
import { YardSalesController } from './yard-sales.controller';
import { YardSalesService } from './yard-sales.service';

describe('YardSalesController', () => {
  let controller: YardSalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YardSalesController],
      providers: [YardSalesService],
    }).compile();

    controller = module.get<YardSalesController>(YardSalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
