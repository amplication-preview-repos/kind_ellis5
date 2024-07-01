import { Client } from "../client/Client";
import { Logistics } from "../logistics/Logistics";
import { Payment } from "../payment/Payment";
import { Product } from "../product/Product";

export type Order = {
  client?: Client | null;
  createdAt: Date;
  id: string;
  logisticsItems?: Array<Logistics>;
  payments?: Array<Payment>;
  product?: Product | null;
  quantity: number | null;
  updatedAt: Date;
};
