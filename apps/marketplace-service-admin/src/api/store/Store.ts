import { Product } from "../product/Product";

export type Store = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  ownerId: string | null;
  products?: Array<Product>;
  updatedAt: Date;
};
