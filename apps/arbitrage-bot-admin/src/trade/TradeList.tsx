import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ARBITRAGEPATH_TITLE_FIELD } from "../arbitragePath/ArbitragePathTitle";

export const TradeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Trades"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
