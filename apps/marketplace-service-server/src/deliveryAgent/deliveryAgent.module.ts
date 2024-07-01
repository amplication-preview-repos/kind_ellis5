import { Module } from "@nestjs/common";
import { DeliveryAgentModuleBase } from "./base/deliveryAgent.module.base";
import { DeliveryAgentService } from "./deliveryAgent.service";
import { DeliveryAgentController } from "./deliveryAgent.controller";
import { DeliveryAgentResolver } from "./deliveryAgent.resolver";

@Module({
  imports: [DeliveryAgentModuleBase],
  controllers: [DeliveryAgentController],
  providers: [DeliveryAgentService, DeliveryAgentResolver],
  exports: [DeliveryAgentService],
})
export class DeliveryAgentModule {}
