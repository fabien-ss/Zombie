import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ParagraphesService } from './paragraphes.service';
import { Paragraphes } from '../entities/Paragraphes';

@Controller('paragraphes')
export class ParagraphesController {
    constructor(private readonly paragraphesService: ParagraphesService) { }

    @Get("paragraphes/chapitre/:id")
    async getParagraphes(@Param("id") id: string): Promise<Paragraphes[]> {
        return this.paragraphesService.getParagraphesByIdDetailsChapitre(+id);
    }

    @Get()
    async findAll(): Promise<Paragraphes[]> {
        return this.paragraphesService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Paragraphes> {
        return this.paragraphesService.findOne(+id);
    }

    @Post()
    async create(@Body() paragraphesData: Partial<Paragraphes>): Promise<Paragraphes> {
        return this.paragraphesService.create(paragraphesData);
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() paragraphesData: Partial<Paragraphes>,
    ): Promise<Paragraphes> {
        return this.paragraphesService.update(+id, paragraphesData);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return this.paragraphesService.remove(+id);
    }
}
