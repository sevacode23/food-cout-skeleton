import { Module } from '@nestjs/common';

import { AuthService } from './services/auth.service';
import { AuthController } from './auth.controller';

// Module for handling admin (backoffice manager) authentication

@Module({
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
