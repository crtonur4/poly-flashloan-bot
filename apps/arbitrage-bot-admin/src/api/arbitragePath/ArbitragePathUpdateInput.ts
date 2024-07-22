import { TradeUpdateManyWithoutArbitragePathsInput } from "./TradeUpdateManyWithoutArbitragePathsInput";

export type ArbitragePathUpdateInput = {
  tokenA?: string | null;
  tokenB?: string | null;
  tokenC?: string | null;
  exchangeA?: string | null;
  exchangeB?: string | null;
  exchangeC?: string | null;
  trades?: TradeUpdateManyWithoutArbitragePathsInput;
};
