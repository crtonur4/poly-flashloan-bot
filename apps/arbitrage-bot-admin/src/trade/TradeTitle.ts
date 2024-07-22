import { Trade as TTrade } from "../api/trade/Trade";

export const TRADE_TITLE_FIELD = "id";

export const TradeTitle = (record: TTrade): string => {
  return record.id?.toString() || String(record.id);
};
