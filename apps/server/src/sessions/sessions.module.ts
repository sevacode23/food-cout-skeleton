import { Module } from '@nestjs/common';

import { SessionsService } from './services/sessions.service';
import { SessionsController } from './sessions.controller';

@Module({
  providers: [SessionsService],
  controllers: [SessionsController],
})
export class SessionsModule {}
