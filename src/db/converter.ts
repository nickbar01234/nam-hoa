import { Order, OrderStatus } from "@/types";
import {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";

export const orderConverter: FirestoreDataConverter<Order, Order> = {
  toFirestore: (data: Order) => data,

  fromFirestore: (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Order => {
    const data = snapshot.data(options)! ?? {};
    return {
      ...data,
      status: data.status ?? OrderStatus.PENDING,
      cart: data.cart ?? [],
    } as Order;
  },
};
