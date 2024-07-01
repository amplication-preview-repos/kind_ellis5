import { SortOrder } from "../../util/SortOrder";

export type StoreOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  ownerId?: SortOrder;
  updatedAt?: SortOrder;
};
