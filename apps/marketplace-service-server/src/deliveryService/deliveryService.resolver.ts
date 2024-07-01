import * as graphql from "@nestjs/graphql";
import { DeliveryServiceResolverBase } from "./base/deliveryService.resolver.base";
import { DeliveryService } from "./base/DeliveryService";
import { DeliveryServiceService } from "./deliveryService.service";

@graphql.Resolver(() => DeliveryService)
export class DeliveryServiceResolver extends DeliveryServiceResolverBase {
  constructor(protected readonly service: DeliveryServiceService) {
    super(service);
  }
}
