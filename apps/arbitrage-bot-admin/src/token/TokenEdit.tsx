import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TokenEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="symbol" source="symbolField" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
