import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ArbitragePathTitle } from "../arbitragePath/ArbitragePathTitle";

export const TradeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
