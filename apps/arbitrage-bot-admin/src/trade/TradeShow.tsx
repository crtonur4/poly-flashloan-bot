import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { ARBITRAGEPATH_TITLE_FIELD } from "../arbitragePath/ArbitragePathTitle";

export const TradeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
