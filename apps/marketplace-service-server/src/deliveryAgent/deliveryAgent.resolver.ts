import * as graphql from "@nestjs/graphql";
import { DeliveryAgentResolverBase } from "./base/deliveryAgent.resolver.base";
import { DeliveryAgent } from "./base/DeliveryAgent";
import { DeliveryAgentService } from "./deliveryAgent.service";

@graphql.Resolver(() => DeliveryAgent)
export class DeliveryAgentResolver extends DeliveryAgentResolverBase {
  constructor(protected readonly service: DeliveryAgentService) {
    super(service);
  }
}
