import { Module } from "@nestjs/common";
import { ExchangeModuleBase } from "./base/exchange.module.base";
import { ExchangeService } from "./exchange.service";
import { ExchangeController } from "./exchange.controller";
import { ExchangeResolver } from "./exchange.resolver";

@Module({
  imports: [ExchangeModuleBase],
  controllers: [ExchangeController],
  providers: [ExchangeService, ExchangeResolver],
  exports: [ExchangeService],
})
export class ExchangeModule {}
