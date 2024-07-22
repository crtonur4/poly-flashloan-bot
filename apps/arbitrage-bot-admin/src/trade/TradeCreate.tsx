import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ArbitragePathTitle } from "../arbitragePath/ArbitragePathTitle";

export const TradeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="initialAmount" source="initialAmount" />
        <NumberInput label="profit" source="profit" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <ReferenceInput
          source="arbitragePath.id"
          reference="ArbitragePath"
          label="arbitragePath"
        >
          <SelectInput optionText={ArbitragePathTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
