import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { HashingService } from 'src/hashing/hashing.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, HashingService],
})
export class UsersModule {}
