import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TokenService } from "./token.service";
import { TokenControllerBase } from "./base/token.controller.base";

@swagger.ApiTags("tokens")
@common.Controller("tokens")
export class TokenController extends TokenControllerBase {
  constructor(protected readonly service: TokenService) {
    super(service);
  }
}
