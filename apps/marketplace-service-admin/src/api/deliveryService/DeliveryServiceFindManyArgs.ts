import { DeliveryServiceWhereInput } from "./DeliveryServiceWhereInput";
import { DeliveryServiceOrderByInput } from "./DeliveryServiceOrderByInput";

export type DeliveryServiceFindManyArgs = {
  where?: DeliveryServiceWhereInput;
  orderBy?: Array<DeliveryServiceOrderByInput>;
  skip?: number;
  take?: number;
};
