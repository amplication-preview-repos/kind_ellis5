import { DeliveryAgent } from "../deliveryAgent/DeliveryAgent";

export type DeliveryService = {
  contactInfo: string | null;
  createdAt: Date;
  deliveryAgents?: Array<DeliveryAgent>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
