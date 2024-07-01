import { DeliveryAgentCreateNestedManyWithoutDeliveryServicesInput } from "./DeliveryAgentCreateNestedManyWithoutDeliveryServicesInput";

export type DeliveryServiceCreateInput = {
  contactInfo?: string | null;
  deliveryAgents?: DeliveryAgentCreateNestedManyWithoutDeliveryServicesInput;
  name?: string | null;
};
