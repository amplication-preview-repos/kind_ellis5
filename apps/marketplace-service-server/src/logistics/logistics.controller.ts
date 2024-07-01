import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LogisticsService } from "./logistics.service";
import { LogisticsControllerBase } from "./base/logistics.controller.base";

@swagger.ApiTags("logistics")
@common.Controller("logistics")
export class LogisticsController extends LogisticsControllerBase {
  constructor(protected readonly service: LogisticsService) {
    super(service);
  }
}
