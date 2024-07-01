import { DeliveryAgentWhereInput } from "./DeliveryAgentWhereInput";
import { DeliveryAgentOrderByInput } from "./DeliveryAgentOrderByInput";

export type DeliveryAgentFindManyArgs = {
  where?: DeliveryAgentWhereInput;
  orderBy?: Array<DeliveryAgentOrderByInput>;
  skip?: number;
  take?: number;
};
