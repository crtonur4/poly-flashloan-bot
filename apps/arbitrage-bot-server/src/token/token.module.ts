import { Module } from "@nestjs/common";
import { TokenModuleBase } from "./base/token.module.base";
import { TokenService } from "./token.service";
import { TokenController } from "./token.controller";
import { TokenResolver } from "./token.resolver";

@Module({
  imports: [TokenModuleBase],
  controllers: [TokenController],
  providers: [TokenService, TokenResolver],
  exports: [TokenService],
})
export class TokenModule {}
