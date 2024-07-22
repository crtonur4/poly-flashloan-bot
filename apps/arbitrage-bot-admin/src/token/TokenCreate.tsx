import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TokenCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="symbol" source="symbolField" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
