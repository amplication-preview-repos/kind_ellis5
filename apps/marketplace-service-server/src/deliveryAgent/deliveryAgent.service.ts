import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeliveryAgentServiceBase } from "./base/deliveryAgent.service.base";

@Injectable()
export class DeliveryAgentService extends DeliveryAgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
