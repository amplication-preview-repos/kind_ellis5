import { ProductCreateNestedManyWithoutStoresInput } from "./ProductCreateNestedManyWithoutStoresInput";

export type StoreCreateInput = {
  description?: string | null;
  name?: string | null;
  ownerId?: string | null;
  products?: ProductCreateNestedManyWithoutStoresInput;
};
