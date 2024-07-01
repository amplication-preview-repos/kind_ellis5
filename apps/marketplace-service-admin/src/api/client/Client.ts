import { Order } from "../order/Order";

export type Client = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  phoneNumber: string | null;
  updatedAt: Date;
};
