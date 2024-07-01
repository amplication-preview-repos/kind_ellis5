import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DeliveryServiceService } from "./deliveryService.service";
import { DeliveryServiceControllerBase } from "./base/deliveryService.controller.base";

@swagger.ApiTags("deliveryServices")
@common.Controller("deliveryServices")
export class DeliveryServiceController extends DeliveryServiceControllerBase {
  constructor(protected readonly service: DeliveryServiceService) {
    super(service);
  }
}
