import { Body, Controller, Get, Post } from '@nestjs/common';
import { Users } from '../entities/Users';
import { AuthentificationService } from './authentification.service';

@Controller('authentification')
export class AuthentificationController {
    
    constructor(private readonly authService: AuthentificationService){

    }
/*
    @Post('/login')
    login(@Body() user: Users){
        try{
            return {
                status: 200,
                data: this.authService.login(user)
            };
        }catch(e){
            return {
                status: 500,
                data: e
            }
        }
    }*/
}
