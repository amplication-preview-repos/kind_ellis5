import { OrderCreateNestedManyWithoutClientsInput } from "./OrderCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  email?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutClientsInput;
  phoneNumber?: string | null;
};
