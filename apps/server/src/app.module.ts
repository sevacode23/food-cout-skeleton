import { Module } from '@nestjs/common';

// Features
import { AuthModule } from '@/auth/auth.module';
import { UsersModule } from '@/users/users.module';
import { CardsModule } from '@/cards/cards.module';
import { QRCodesModule } from '@/qr-codes/qr-codes.module';
import { TablesModule } from '@/tables/tables.module';
import { CardGatewayModule } from '@/card-gateway/card-gateway.module';
import { PaymentsModule } from '@/payments/payments.module';
import { SessionsModule } from '@/sessions/sessions.module';
import { OrdersModule } from '@/orders/orders.module';
import { DishesModule } from '@/dishes/dishes.module';
import { CategoriesModule } from '@/categories/categories.module';
import { OrderActionsModule } from '@/order-actions/order-actions.module';

// Infrastructure
import { TypeOrmModule } from '@/_core/typeorm/typeorm.module';
import { RedisModule } from '@/_core/redis/redis.module';
import { CacheModule } from '@/_core/cache/cache.module';
import { ThrottlerModule } from '@/_core/throttler/throttler.module';

@Module({
  imports: [
    // Features
    AuthModule,
    UsersModule,
    CardsModule,
    QRCodesModule,
    TablesModule,
    CardGatewayModule,
    SessionsModule,
    OrdersModule,
    DishesModule,
    CategoriesModule,
    OrderActionsModule,
    PaymentsModule,

    // Infrastructure
    TypeOrmModule,
    RedisModule,
    CacheModule,
    ThrottlerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
