import { SortOrder } from "../../util/SortOrder";

export type ArbitragePathOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  tokenA?: SortOrder;
  tokenB?: SortOrder;
  tokenC?: SortOrder;
  exchangeA?: SortOrder;
  exchangeB?: SortOrder;
  exchangeC?: SortOrder;
};
