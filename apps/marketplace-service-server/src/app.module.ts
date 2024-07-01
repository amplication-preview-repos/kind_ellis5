import { Module } from "@nestjs/common";
import { ProductModule } from "./product/product.module";
import { OrderModule } from "./order/order.module";
import { StoreModule } from "./store/store.module";
import { PaymentModule } from "./payment/payment.module";
import { ClientModule } from "./client/client.module";
import { LogisticsModule } from "./logistics/logistics.module";
import { UserModule } from "./user/user.module";
import { DeliveryServiceModule } from "./deliveryService/deliveryService.module";
import { DeliveryAgentModule } from "./deliveryAgent/deliveryAgent.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { KafkaModule } from "./kafka/kafka.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    KafkaModule,
    ProductModule,
    OrderModule,
    StoreModule,
    PaymentModule,
    ClientModule,
    LogisticsModule,
    UserModule,
    DeliveryServiceModule,
    DeliveryAgentModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
