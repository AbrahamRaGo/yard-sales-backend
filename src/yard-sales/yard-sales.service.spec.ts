import { Test, TestingModule } from '@nestjs/testing';
import { YardSalesService } from './yard-sales.service';

describe('YardSalesService', () => {
  let service: YardSalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YardSalesService],
    }).compile();

    service = module.get<YardSalesService>(YardSalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
