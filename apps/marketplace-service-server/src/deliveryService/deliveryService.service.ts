import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DeliveryServiceServiceBase } from "./base/deliveryService.service.base";

@Injectable()
export class DeliveryServiceService extends DeliveryServiceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
