import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ARBITRAGEPATH_TITLE_FIELD } from "./ArbitragePathTitle";

export const ArbitragePathShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="tokenA" source="tokenA" />
        <TextField label="tokenB" source="tokenB" />
        <TextField label="tokenC" source="tokenC" />
        <TextField label="exchangeA" source="exchangeA" />
        <TextField label="exchangeB" source="exchangeB" />
        <TextField label="exchangeC" source="exchangeC" />
        <ReferenceManyField
          reference="Trade"
          target="arbitragePathId"
          label="Trades"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="initialAmount" source="initialAmount" />
            <TextField label="profit" source="profit" />
            <TextField label="timestamp" source="timestamp" />
            <ReferenceField
              label="arbitragePath"
              source="arbitragepath.id"
              reference="ArbitragePath"
            >
              <TextField source={ARBITRAGEPATH_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
