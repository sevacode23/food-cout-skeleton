import { Module } from '@nestjs/common';

import { DishesService } from './services/dishes.service';
import { DishesController } from './dish.controller';

@Module({
  providers: [DishesService],
  controllers: [DishesController],
})
export class DishesModule {}
