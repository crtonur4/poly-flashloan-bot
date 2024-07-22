import { TradeWhereInput } from "./TradeWhereInput";
import { TradeOrderByInput } from "./TradeOrderByInput";

export type TradeFindManyArgs = {
  where?: TradeWhereInput;
  orderBy?: Array<TradeOrderByInput>;
  skip?: number;
  take?: number;
};
