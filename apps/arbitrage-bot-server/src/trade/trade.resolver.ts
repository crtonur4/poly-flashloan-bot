import * as graphql from "@nestjs/graphql";
import { TradeResolverBase } from "./base/trade.resolver.base";
import { Trade } from "./base/Trade";
import { TradeService } from "./trade.service";

@graphql.Resolver(() => Trade)
export class TradeResolver extends TradeResolverBase {
  constructor(protected readonly service: TradeService) {
    super(service);
  }
}
