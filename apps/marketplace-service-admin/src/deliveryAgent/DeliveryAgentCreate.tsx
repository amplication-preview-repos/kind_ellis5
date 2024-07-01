import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { DeliveryServiceTitle } from "../deliveryService/DeliveryServiceTitle";

export const DeliveryAgentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="deliveryService.id"
          reference="DeliveryService"
          label="deliveryService"
        >
          <SelectInput optionText={DeliveryServiceTitle} />
        </ReferenceInput>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <TextInput label="phoneNumber" source="phoneNumber" />
      </SimpleForm>
    </Create>
  );
};
