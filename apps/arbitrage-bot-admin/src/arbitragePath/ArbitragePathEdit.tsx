import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TradeTitle } from "../trade/TradeTitle";

export const ArbitragePathEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="tokenA" source="tokenA" />
        <TextInput label="tokenB" source="tokenB" />
        <TextInput label="tokenC" source="tokenC" />
        <TextInput label="exchangeA" source="exchangeA" />
        <TextInput label="exchangeB" source="exchangeB" />
        <TextInput label="exchangeC" source="exchangeC" />
        <ReferenceArrayInput
          source="trades"
          reference="Trade"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TradeTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
