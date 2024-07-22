import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TradeTitle } from "../trade/TradeTitle";

export const ArbitragePathCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
