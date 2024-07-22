import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ArbitragePathServiceBase } from "./base/arbitragePath.service.base";

@Injectable()
export class ArbitragePathService extends ArbitragePathServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
