import { DeliveryService } from "../deliveryService/DeliveryService";

export type DeliveryAgent = {
  createdAt: Date;
  deliveryService?: DeliveryService | null;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  updatedAt: Date;
};
