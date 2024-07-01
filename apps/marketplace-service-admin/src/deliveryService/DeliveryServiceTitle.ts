import { DeliveryService as TDeliveryService } from "../api/deliveryService/DeliveryService";

export const DELIVERYSERVICE_TITLE_FIELD = "name";

export const DeliveryServiceTitle = (record: TDeliveryService): string => {
  return record.name?.toString() || String(record.id);
};
