import { Body, Controller, Post, Get, UseGuards, Req, UnauthorizedException, Put } from '@nestjs/common';
import { Administrator } from '../entities/Administrator';
import { AdministratorService } from './administrator.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('administrator')
export class AdministratorController {

    constructor(private readonly adminService: AdministratorService){

    }

    @Put()
    async update(@Body() administrator: Administrator){
        console.log( administrator)
        try{
            return {
                status : 200,
                data: await this.adminService.update( administrator)
            }
        }catch(e){
            return {
                status : 500,
                data: e.message
            }   
        }
    }

    @Post('/login')
    async login(@Body() administrator: Administrator){
        console.log( administrator)
        try{
            return {
                status : 200,
                data: await this.adminService.login( administrator)
            }
        }catch(e){
            return {
                status : 500,
                data: e.message
            }   
        }
    }


    @Post('/sign')
    async sign(@Body() administrator: Administrator){
        console.log( administrator)
        try{
            return {
                status : 200,
                data: await this.adminService.signin( administrator)
            }
        }catch(e){
            return {
                status : 500,
                data: e.message
            }
        }
    }
    @Get()
//      @UseGuards(AuthGuard('jwt'))
    async getProtectedResource(@Req() req) {
      const token = req.headers.authorization?.split(' ')[1]; // Assuming Bearer token format
      if (!token) {
        throw new UnauthorizedException('No token provided');
      }
      try {
        const decoded = await this.adminService.verify(token);
        return { status: '200', data: decoded };
      } catch (error) {
        return {
            status: '500',
            data: error.message
        }
    }
    }
}
