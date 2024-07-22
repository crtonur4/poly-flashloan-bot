import { ArbitragePath as TArbitragePath } from "../api/arbitragePath/ArbitragePath";

export const ARBITRAGEPATH_TITLE_FIELD = "tokenA";

export const ArbitragePathTitle = (record: TArbitragePath): string => {
  return record.tokenA?.toString() || String(record.id);
};
