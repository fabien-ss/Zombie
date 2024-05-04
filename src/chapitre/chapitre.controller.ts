import { Controller, Get, Post, Body, Param, Put, Delete, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { ChapitreService } from './chapitre.service';
import { Chapitre } from '../entities/Chapitre';
import { AjoutTitre } from '../dto/AjoutTitres';
import { FilesInterceptor } from '@nestjs/platform-express';

import { Multer } from 'multer';

@Controller('chapitres')
export class ChapitreController {
  constructor(private readonly chapitreService: ChapitreService) {}

  @Post('titre')
  @UseInterceptors(FilesInterceptor('files', 10)) // 'files' correspond à votre champ de fichier et 10 est le nombre maximum de fichiers
  async uploadFiles(@UploadedFiles() files, @Body() body: any) {
    console.log(files);
  }

  @Post('titre')
  @UseInterceptors(FilesInterceptor('files')) // 'files' is the name of the file input field in your form
  uploadMultipleFiles(@UploadedFiles() files: Array<Multer>, @Body() body: any) {
    console.log(files); // This will log an array of the uploaded files
    console.log(body); // This will log the rest of the form data
   }
  @Get()
  async findAll(): Promise<Chapitre[]> {
    return this.chapitreService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Chapitre> {
    return this.chapitreService.findOne(+id);
  }

  @Post()
  async create(@Body() chapitreData: Chapitre): Promise<Chapitre> {
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
