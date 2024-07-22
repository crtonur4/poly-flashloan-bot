import { Trade } from "../trade/Trade";

export type ArbitragePath = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  tokenA: string | null;
  tokenB: string | null;
  tokenC: string | null;
  exchangeA: string | null;
  exchangeB: string | null;
  exchangeC: string | null;
  trades?: Array<Trade>;
};
