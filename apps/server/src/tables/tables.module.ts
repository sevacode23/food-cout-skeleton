import { Module } from '@nestjs/common';

import { TablesService } from './services/tables.service';

@Module({
  providers: [TablesService],
})
export class TablesModule {}
