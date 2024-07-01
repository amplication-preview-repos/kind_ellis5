import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LogisticsListRelationFilter } from "../logistics/LogisticsListRelationFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type OrderWhereInput = {
  client?: ClientWhereUniqueInput;
  id?: StringFilter;
  logisticsItems?: LogisticsListRelationFilter;
  payments?: PaymentListRelationFilter;
  product?: ProductWhereUniqueInput;
  quantity?: IntNullableFilter;
};
