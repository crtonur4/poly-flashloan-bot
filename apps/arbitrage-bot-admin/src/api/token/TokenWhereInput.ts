import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TokenWhereInput = {
  id?: StringFilter;
  symbolField?: StringNullableFilter;
  name?: StringNullableFilter;
};
