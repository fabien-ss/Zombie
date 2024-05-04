import { Controller, Get, Param } from '@nestjs/common';
import { BrainShopService } from './brain-shop.service';

@Controller('brain-shop')
export class BrainShopController {

    constructor(private readonly brainShopService: BrainShopService){
        
    }

    @Get("/:userId/:message")
    async talk(@Param("userId") userId: string, @Param("message") message: string){
        try{
            return {
                status: 200,
                message: await this.brainShopService.talk(message)
            }
        }catch(error){
            return {
                status: 400,
                message: "error: " + error.message
            }
        }
    }
}
