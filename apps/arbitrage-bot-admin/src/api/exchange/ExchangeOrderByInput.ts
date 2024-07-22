import { SortOrder } from "../../util/SortOrder";

export type ExchangeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  apiEndpoint?: SortOrder;
};
