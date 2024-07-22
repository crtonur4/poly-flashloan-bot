import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TradeListRelationFilter } from "../trade/TradeListRelationFilter";

export type ArbitragePathWhereInput = {
  id?: StringFilter;
  tokenA?: StringNullableFilter;
  tokenB?: StringNullableFilter;
  tokenC?: StringNullableFilter;
  exchangeA?: StringNullableFilter;
  exchangeB?: StringNullableFilter;
  exchangeC?: StringNullableFilter;
  trades?: TradeListRelationFilter;
};
