import * as graphql from "@nestjs/graphql";
import { ExchangeResolverBase } from "./base/exchange.resolver.base";
import { Exchange } from "./base/Exchange";
import { ExchangeService } from "./exchange.service";

@graphql.Resolver(() => Exchange)
export class ExchangeResolver extends ExchangeResolverBase {
  constructor(protected readonly service: ExchangeService) {
    super(service);
  }
}
