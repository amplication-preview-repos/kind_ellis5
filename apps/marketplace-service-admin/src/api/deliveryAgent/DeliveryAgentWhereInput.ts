import { DeliveryServiceWhereUniqueInput } from "../deliveryService/DeliveryServiceWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DeliveryAgentWhereInput = {
  deliveryService?: DeliveryServiceWhereUniqueInput;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
};
