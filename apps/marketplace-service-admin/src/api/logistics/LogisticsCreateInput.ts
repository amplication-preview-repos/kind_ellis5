import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type LogisticsCreateInput = {
  deliveryAddress?: string | null;
  order?: OrderWhereUniqueInput | null;
  status?: "Option1" | null;
};
