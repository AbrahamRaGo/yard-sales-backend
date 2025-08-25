import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//INFO: Controllers are responsible for handling incoming requests and sending responses back to the client.

//NOTE: En este archivo se crean las rutas y los metodos a estas, aqui se
//hace la logica antes de enviarla al servicio que es quien interactua con el ORM | ODM

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
