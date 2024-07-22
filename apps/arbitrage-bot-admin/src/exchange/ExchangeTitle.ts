import { Exchange as TExchange } from "../api/exchange/Exchange";

export const EXCHANGE_TITLE_FIELD = "name";

export const ExchangeTitle = (record: TExchange): string => {
  return record.name?.toString() || String(record.id);
};
