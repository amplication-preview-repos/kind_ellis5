import { Module } from "@nestjs/common";
import { DeliveryServiceModuleBase } from "./base/deliveryService.module.base";
import { DeliveryServiceService } from "./deliveryService.service";
import { DeliveryServiceController } from "./deliveryService.controller";
import { DeliveryServiceResolver } from "./deliveryService.resolver";

@Module({
  imports: [DeliveryServiceModuleBase],
  controllers: [DeliveryServiceController],
  providers: [DeliveryServiceService, DeliveryServiceResolver],
  exports: [DeliveryServiceService],
})
export class DeliveryServiceModule {}
