import { SortOrder } from "../../util/SortOrder";

export type TradeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  initialAmount?: SortOrder;
  profit?: SortOrder;
  timestamp?: SortOrder;
  arbitragePathId?: SortOrder;
};
