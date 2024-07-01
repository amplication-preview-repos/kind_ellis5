import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type LogisticsUpdateInput = {
  deliveryAddress?: string | null;
  order?: OrderWhereUniqueInput | null;
  status?: "Option1" | null;
};
