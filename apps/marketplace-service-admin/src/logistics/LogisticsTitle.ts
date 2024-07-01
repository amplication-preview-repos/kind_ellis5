import { Logistics as TLogistics } from "../api/logistics/Logistics";

export const LOGISTICS_TITLE_FIELD = "id";

export const LogisticsTitle = (record: TLogistics): string => {
  return record.id?.toString() || String(record.id);
};
