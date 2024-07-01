import { LogisticsWhereInput } from "./LogisticsWhereInput";
import { LogisticsOrderByInput } from "./LogisticsOrderByInput";

export type LogisticsFindManyArgs = {
  where?: LogisticsWhereInput;
  orderBy?: Array<LogisticsOrderByInput>;
  skip?: number;
  take?: number;
};
