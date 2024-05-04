import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class BrainShopService {
    async talk(prompt: string){
        let userId = 1111;
        const url = `http://api.brainshop.ai/get?bid=181719&key=${process.env.BRAIN_SHOP_API_KEY}&uid=${userId}&msg=${prompt}`;
        let result = await axios.get(url);
        return result.data.cnt
    }   
}
    