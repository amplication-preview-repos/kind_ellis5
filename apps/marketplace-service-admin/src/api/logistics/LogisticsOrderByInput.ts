import { SortOrder } from "../../util/SortOrder";

export type LogisticsOrderByInput = {
  createdAt?: SortOrder;
  deliveryAddress?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
