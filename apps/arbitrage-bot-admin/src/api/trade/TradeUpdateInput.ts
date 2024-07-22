import { ArbitragePathWhereUniqueInput } from "../arbitragePath/ArbitragePathWhereUniqueInput";

export type TradeUpdateInput = {
  initialAmount?: number | null;
  profit?: number | null;
  timestamp?: Date | null;
  arbitragePath?: ArbitragePathWhereUniqueInput | null;
};
