import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ArbitragePathWhereUniqueInput } from "../arbitragePath/ArbitragePathWhereUniqueInput";

export type TradeWhereInput = {
  id?: StringFilter;
  initialAmount?: FloatNullableFilter;
  profit?: FloatNullableFilter;
  timestamp?: DateTimeNullableFilter;
  arbitragePath?: ArbitragePathWhereUniqueInput;
};
