import { SortOrder } from "../../util/SortOrder";

export type TokenOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  symbolField?: SortOrder;
  name?: SortOrder;
};
