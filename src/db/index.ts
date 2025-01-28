import { IdentifiableOrder, Order } from "@/types";
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
  onSnapshot,
  QuerySnapshot,
  doc,
  writeBatch,
  orderBy,
  query,
  updateDoc,
  setDoc,
  where,
} from "firebase/firestore";
import { orderConverter } from "./converter";

const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
});

export const db = getFirestore(app);

export const addOrder = async (order: Order) => {
  const ref = collection(db, "orders").withConverter(orderConverter);
  await addDoc(ref, { ...order, timestamp: serverTimestamp() });
};

export const setOrder = async (order: IdentifiableOrder) => {
  const ref = doc(db, "orders", order.id).withConverter(orderConverter);
  const { id, ...rest } = order;
  await setDoc(ref, rest);
};

export const deleteOrders = async (ids: string[]) => {
  if (ids.length > 0) {
    const batch = writeBatch(db);
    ids.map((id) => doc(db, "orders", id)).forEach((id) => batch.delete(id));
    await batch.commit();
  }
};

export const listenForOrders = (
  cb: (docs: QuerySnapshot<Order, Order>) => void
) => {
  const today = new Date();
  today.setHours(0, 0, 0);
  return onSnapshot(
    query(
      collection(db, "orders").withConverter(orderConverter),
      orderBy("timestamp", "asc"),
      where("timestamp", ">=", today)
    ),
    cb
  );
};
