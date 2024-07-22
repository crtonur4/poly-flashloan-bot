import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExchangeService } from "./exchange.service";
import { ExchangeControllerBase } from "./base/exchange.controller.base";

@swagger.ApiTags("exchanges")
@common.Controller("exchanges")
export class ExchangeController extends ExchangeControllerBase {
  constructor(protected readonly service: ExchangeService) {
    super(service);
  }
}
