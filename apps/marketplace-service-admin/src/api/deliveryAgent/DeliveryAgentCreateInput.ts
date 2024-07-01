import { DeliveryServiceWhereUniqueInput } from "../deliveryService/DeliveryServiceWhereUniqueInput";

export type DeliveryAgentCreateInput = {
  deliveryService?: DeliveryServiceWhereUniqueInput | null;
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
};
