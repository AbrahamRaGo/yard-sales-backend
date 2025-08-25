import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from 'config/config';
import { NestExpressApplication } from '@nestjs/platform-express';

async function server() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(config().port);
}
server();
