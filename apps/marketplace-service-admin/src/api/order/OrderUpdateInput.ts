import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { LogisticsUpdateManyWithoutOrdersInput } from "./LogisticsUpdateManyWithoutOrdersInput";
import { PaymentUpdateManyWithoutOrdersInput } from "./PaymentUpdateManyWithoutOrdersInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type OrderUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  logisticsItems?: LogisticsUpdateManyWithoutOrdersInput;
  payments?: PaymentUpdateManyWithoutOrdersInput;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
