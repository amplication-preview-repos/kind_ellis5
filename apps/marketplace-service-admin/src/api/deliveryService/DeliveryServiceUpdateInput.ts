import { DeliveryAgentUpdateManyWithoutDeliveryServicesInput } from "./DeliveryAgentUpdateManyWithoutDeliveryServicesInput";

export type DeliveryServiceUpdateInput = {
  contactInfo?: string | null;
  deliveryAgents?: DeliveryAgentUpdateManyWithoutDeliveryServicesInput;
  name?: string | null;
};
