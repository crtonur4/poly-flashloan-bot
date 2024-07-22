import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TradeServiceBase } from "./base/trade.service.base";

@Injectable()
export class TradeService extends TradeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
