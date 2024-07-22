import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ArbitragePathService } from "./arbitragePath.service";
import { ArbitragePathControllerBase } from "./base/arbitragePath.controller.base";

@swagger.ApiTags("arbitragePaths")
@common.Controller("arbitragePaths")
export class ArbitragePathController extends ArbitragePathControllerBase {
  constructor(protected readonly service: ArbitragePathService) {
    super(service);
  }
}
