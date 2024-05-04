import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ChapitreService } from './chapitre.service';
import { Chapitre } from '../entities/Chapitre';

@Controller('chapitres')
export class ChapitreController {
  constructor(private readonly chapitreService: ChapitreService) {}

  @Get()
  async findAll(): Promise<Chapitre[]> {
    return this.chapitreService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Chapitre> {
    return this.chapitreService.findOne(+id);
  }

  @Post()
  async create(@Body() chapitreData: Partial<Chapitre>): Promise<Chapitre> {
    return this.chapitreService.create(chapitreData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() chapitreData: Partial<Chapitre>,
  ): Promise<Chapitre> {
    return this.chapitreService.update(+id, chapitreData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.chapitreService.remove(+id);
  }
}
