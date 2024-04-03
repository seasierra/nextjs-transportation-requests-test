export enum ParcelType {
  gadgets = "gadgets",
  drings = "drinks",
  clothes = "clothes",
  medicines = "medicines",
  other = "other",
}

export interface IRequest {
  from: string;
  to: string;
  parcelType?: ParcelType;
  dispatchDate: string;
  parcelDescription?: string;
  orderType: "delivery" | "order";
  id: string;
  userId: string;
  createdAt: string;
}
