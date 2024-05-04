import { Controller, Get, Post, Header, Redirect, Bind, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // if need headers
  @Get()
  // @Header('Cache-Control', 'none')
  getHello(): string {
    return this.appService.getHello();
  }

  // if redirect
  @Post()
  // @Redirect('https://nestjs.com', 301)
  create(): string {
    return 'This action adds a new cat';
  }

  @Get('all')
  findAll(): string {
    return 'This action returns all cats';
  }

  
  @Get(':id')
  @Bind(Param())
  findOne(params) {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  
  @Get(':id')
  findOneOne(@Param('id') id: string): string {
    return `This a  ction returns a #${id} cat`;
  }

  
  @Get()
  async findAllAsync() {
    return [];
  }

}
