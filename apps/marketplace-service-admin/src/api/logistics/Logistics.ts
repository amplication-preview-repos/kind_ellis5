import { Order } from "../order/Order";

export type Logistics = {
  createdAt: Date;
  deliveryAddress: string | null;
  id: string;
  order?: Order | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
