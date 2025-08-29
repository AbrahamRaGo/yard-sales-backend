import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { HashingService } from 'src/hashing/hashing.service';
import { UserCreatedDto } from './dto/user-created.dto';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private hashService: HashingService,
  ) {}

  async create(user: RegisterUserDto): Promise<UserCreatedDto> {
    const hashedPassword = await this.hashService.hashPassword(user.password);
    return await this.prisma.user.create({
      data: { ...user, password: hashedPassword },
      select: { id: true, name: true },
    });
  }

  async findAll() {
    const users = await this.prisma.user.findMany();
    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUser: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
