import * as graphql from "@nestjs/graphql";
import { TokenResolverBase } from "./base/token.resolver.base";
import { Token } from "./base/Token";
import { TokenService } from "./token.service";

@graphql.Resolver(() => Token)
export class TokenResolver extends TokenResolverBase {
  constructor(protected readonly service: TokenService) {
    super(service);
  }
}
