import * as graphql from "@nestjs/graphql";
import { ArbitragePathResolverBase } from "./base/arbitragePath.resolver.base";
import { ArbitragePath } from "./base/ArbitragePath";
import { ArbitragePathService } from "./arbitragePath.service";

@graphql.Resolver(() => ArbitragePath)
export class ArbitragePathResolver extends ArbitragePathResolverBase {
  constructor(protected readonly service: ArbitragePathService) {
    super(service);
  }
}
