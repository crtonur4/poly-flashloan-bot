import { ExchangeWhereInput } from "./ExchangeWhereInput";
import { ExchangeOrderByInput } from "./ExchangeOrderByInput";

export type ExchangeFindManyArgs = {
  where?: ExchangeWhereInput;
  orderBy?: Array<ExchangeOrderByInput>;
  skip?: number;
  take?: number;
};
