import { OrderStatus } from "@/types";

type StatusMapping = Record<OrderStatus, string>;

export const STATUSES: StatusMapping = {
  [OrderStatus.PENDING]: "Chưa xác nhận",
  [OrderStatus.IN_PROGRESS]: "Đang xác nhận",
  [OrderStatus.DONE]: "Hoàn thành",
};
