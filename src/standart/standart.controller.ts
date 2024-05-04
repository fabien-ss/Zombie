import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Standart } from '../entities/Standart';
import { StandartService } from './standart.service';

@Controller('standart')
export class StandartController {
    constructor(private readonly standartService: StandartService) {}

    @Get()
    async findAll(@Query('page') page = 1, @Query('limit') limit = 10): Promise<Standart[]> {
        return this.standartService.findAll({ page, limit });
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Standart> {
        return this.standartService.findOne(id);
    }

    @Post()
    async create(@Body() standart: Standart): Promise<Standart> {
        return this.standartService.create(standart);
    }

    @Put(':id') 
    async update(@Param('id') id: string, @Body() standart: Standart): Promise<Standart> {
        return this.standartService.update(id, standart);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return this.standartService.remove(id);
    }
}
