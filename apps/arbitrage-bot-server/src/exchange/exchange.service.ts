import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExchangeServiceBase } from "./base/exchange.service.base";

@Injectable()
export class ExchangeService extends ExchangeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
