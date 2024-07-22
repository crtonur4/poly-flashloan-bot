import { TradeCreateNestedManyWithoutArbitragePathsInput } from "./TradeCreateNestedManyWithoutArbitragePathsInput";

export type ArbitragePathCreateInput = {
  tokenA?: string | null;
  tokenB?: string | null;
  tokenC?: string | null;
  exchangeA?: string | null;
  exchangeB?: string | null;
  exchangeC?: string | null;
  trades?: TradeCreateNestedManyWithoutArbitragePathsInput;
};
