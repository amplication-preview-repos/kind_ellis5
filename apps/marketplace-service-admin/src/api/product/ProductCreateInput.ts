import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type ProductCreateInput = {
  description?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
  price?: number | null;
  store?: StoreWhereUniqueInput | null;
};
