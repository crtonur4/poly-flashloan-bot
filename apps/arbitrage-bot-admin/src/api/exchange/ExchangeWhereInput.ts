import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ExchangeWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  apiEndpoint?: StringNullableFilter;
};
