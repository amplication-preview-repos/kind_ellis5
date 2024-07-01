import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LogisticsServiceBase } from "./base/logistics.service.base";

@Injectable()
export class LogisticsService extends LogisticsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
