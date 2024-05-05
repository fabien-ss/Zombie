import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DetailsChapitreService } from './details-chapitre.service';
import { DetailsChapitre } from '../entities/DetailsChapitre';

@Controller('details-chapitres')
export class DetailsChapitreController {
  constructor(private readonly detailsChapitreService: DetailsChapitreService) {}

  

  @Get('chapitre/:id')
  async findDetailsByIdChapitre(id: number): Promise<DetailsChapitre[]>{
    return this.detailsChapitreService.getDetailsByIdChapitre(id);
  }

  @Get()
  async findAll(): Promise<DetailsChapitre[]> {
    return this.detailsChapitreService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<DetailsChapitre> {
    return this.detailsChapitreService.findOne(+id);
  }

  @Post()
  async create(@Body() detailsChapitreData: Partial<DetailsChapitre>): Promise<DetailsChapitre> {
    return this.detailsChapitreService.create(detailsChapitreData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() detailsChapitreData: Partial<DetailsChapitre>,
  ): Promise<DetailsChapitre> {
    return this.detailsChapitreService.update(+id, detailsChapitreData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.detailsChapitreService.remove(+id);
  }
}
