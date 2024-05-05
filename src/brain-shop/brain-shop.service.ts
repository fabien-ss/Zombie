import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class BrainShopService {
    async talk(prompt: string){
        let userId = 1111;
        //const url = process.env.BRAIN_SHOP + `&uid=${userId}&msg=${prompt}`;
        const url = `http://api.brainshop.ai/get?bid=181830&key=${process.env.BRAIN_SHOP_API_KEY}`;
        let result = await axios.get(url);
        return result.data.cnt
    }   
}
    