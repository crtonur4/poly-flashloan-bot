import { Token as TToken } from "../api/token/Token";

export const TOKEN_TITLE_FIELD = "name";

export const TokenTitle = (record: TToken): string => {
  return record.name?.toString() || String(record.id);
};
