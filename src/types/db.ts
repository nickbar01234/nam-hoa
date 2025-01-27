import { Order } from "./menu";

export interface IdentifiableOrder extends Order {
  id: string;
}

export type IdentifiableOrders = IdentifiableOrder[];
