import { Module } from "@nestjs/common";
import { ArbitragePathModuleBase } from "./base/arbitragePath.module.base";
import { ArbitragePathService } from "./arbitragePath.service";
import { ArbitragePathController } from "./arbitragePath.controller";
import { ArbitragePathResolver } from "./arbitragePath.resolver";

@Module({
  imports: [ArbitragePathModuleBase],
  controllers: [ArbitragePathController],
  providers: [ArbitragePathService, ArbitragePathResolver],
  exports: [ArbitragePathService],
})
export class ArbitragePathModule {}
