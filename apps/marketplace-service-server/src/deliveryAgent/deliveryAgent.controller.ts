import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeliveryAgentService } from "./deliveryAgent.service";
import { DeliveryAgentControllerBase } from "./base/deliveryAgent.controller.base";

@swagger.ApiTags("deliveryAgents")
@common.Controller("deliveryAgents")
export class DeliveryAgentController extends DeliveryAgentControllerBase {
  constructor(protected readonly service: DeliveryAgentService) {
    super(service);
  }
}
