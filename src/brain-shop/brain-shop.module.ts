import { Module } from '@nestjs/common';
import { BrainShopController } from './brain-shop.controller';
import { BrainShopService } from './brain-shop.service';

@Module({
  controllers: [BrainShopController],
  providers: [BrainShopService]
})
export class BrainShopModule {}
