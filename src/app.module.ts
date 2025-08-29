import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { YardSalesModule } from './yard-sales/yard-sales.module';
import { UsersModule } from './users/users.module';
import { HashingModule } from './hashing/hashing.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    YardSalesModule,
    UsersModule,
    HashingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
