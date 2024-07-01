import { OrderUpdateManyWithoutClientsInput } from "./OrderUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  email?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutClientsInput;
  phoneNumber?: string | null;
};
