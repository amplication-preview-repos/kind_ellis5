import * as graphql from "@nestjs/graphql";
import { LogisticsResolverBase } from "./base/logistics.resolver.base";
import { Logistics } from "./base/Logistics";
import { LogisticsService } from "./logistics.service";

@graphql.Resolver(() => Logistics)
export class LogisticsResolver extends LogisticsResolverBase {
  constructor(protected readonly service: LogisticsService) {
    super(service);
  }
}
