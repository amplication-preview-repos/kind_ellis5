import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { LogisticsCreateNestedManyWithoutOrdersInput } from "./LogisticsCreateNestedManyWithoutOrdersInput";
import { PaymentCreateNestedManyWithoutOrdersInput } from "./PaymentCreateNestedManyWithoutOrdersInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderCreateInput = {
  client?: ClientWhereUniqueInput | null;
  logisticsItems?: LogisticsCreateNestedManyWithoutOrdersInput;
  payments?: PaymentCreateNestedManyWithoutOrdersInput;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
