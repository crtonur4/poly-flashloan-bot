import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TradeService } from "./trade.service";
import { TradeControllerBase } from "./base/trade.controller.base";

@swagger.ApiTags("trades")
@common.Controller("trades")
export class TradeController extends TradeControllerBase {
  constructor(protected readonly service: TradeService) {
    super(service);
  }
}
