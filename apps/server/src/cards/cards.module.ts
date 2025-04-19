import { Module } from '@nestjs/common';

import { CardsService } from './services/cards.service';

@Module({
  providers: [CardsService],
})
export class CardsModule {}
