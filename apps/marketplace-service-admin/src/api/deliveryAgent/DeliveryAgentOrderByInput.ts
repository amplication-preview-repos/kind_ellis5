import { SortOrder } from "../../util/SortOrder";

export type DeliveryAgentOrderByInput = {
  createdAt?: SortOrder;
  deliveryServiceId?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
