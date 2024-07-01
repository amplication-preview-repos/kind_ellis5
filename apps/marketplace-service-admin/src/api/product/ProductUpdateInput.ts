import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type ProductUpdateInput = {
  description?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
  price?: number | null;
  store?: StoreWhereUniqueInput | null;
};
