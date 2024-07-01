import { Order } from "../order/Order";
import { Store } from "../store/Store";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  store?: Store | null;
  updatedAt: Date;
};
