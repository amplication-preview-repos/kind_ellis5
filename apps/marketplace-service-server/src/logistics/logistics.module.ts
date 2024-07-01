import { Module } from "@nestjs/common";
import { LogisticsModuleBase } from "./base/logistics.module.base";
import { LogisticsService } from "./logistics.service";
import { LogisticsController } from "./logistics.controller";
import { LogisticsResolver } from "./logistics.resolver";

@Module({
  imports: [LogisticsModuleBase],
  controllers: [LogisticsController],
  providers: [LogisticsService, LogisticsResolver],
  exports: [LogisticsService],
})
export class LogisticsModule {}
