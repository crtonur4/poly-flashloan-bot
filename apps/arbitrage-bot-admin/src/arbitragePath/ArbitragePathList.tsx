import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ArbitragePathList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ArbitragePaths"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="tokenA" source="tokenA" />
        <TextField label="tokenB" source="tokenB" />
        <TextField label="tokenC" source="tokenC" />
        <TextField label="exchangeA" source="exchangeA" />
        <TextField label="exchangeB" source="exchangeB" />
        <TextField label="exchangeC" source="exchangeC" />
      </Datagrid>
    </List>
  );
};
