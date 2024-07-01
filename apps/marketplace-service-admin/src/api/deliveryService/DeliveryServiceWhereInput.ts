import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DeliveryAgentListRelationFilter } from "../deliveryAgent/DeliveryAgentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type DeliveryServiceWhereInput = {
  contactInfo?: StringNullableFilter;
  deliveryAgents?: DeliveryAgentListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
