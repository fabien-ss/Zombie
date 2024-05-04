import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('database')
export class DatabaseController {

    constructor(private readonly dataBaseService: DatabaseService){}

    @Get()
    async getTables(){
        return await this.dataBaseService.listTables();
    }
}
