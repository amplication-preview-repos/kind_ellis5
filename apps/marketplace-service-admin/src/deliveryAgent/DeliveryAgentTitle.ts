import { DeliveryAgent as TDeliveryAgent } from "../api/deliveryAgent/DeliveryAgent";

export const DELIVERYAGENT_TITLE_FIELD = "name";

export const DeliveryAgentTitle = (record: TDeliveryAgent): string => {
  return record.name?.toString() || String(record.id);
};
