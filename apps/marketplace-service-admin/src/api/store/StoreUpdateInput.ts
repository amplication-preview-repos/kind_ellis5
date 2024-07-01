import { ProductUpdateManyWithoutStoresInput } from "./ProductUpdateManyWithoutStoresInput";

export type StoreUpdateInput = {
  description?: string | null;
  name?: string | null;
  ownerId?: string | null;
  products?: ProductUpdateManyWithoutStoresInput;
};
