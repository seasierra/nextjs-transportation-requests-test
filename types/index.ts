export enum ParcelType {
  gadgets = "gadgets",
  drings = "drinks",
  clothes = "clothes",
  medicines = "medicines",
  other = "other",
}

export interface IPackage {
  from: string;
  to: string;
  parcelType?: ParcelType;
  dispatchDate: string;
  parcelDescription?: string;
  orderType: "delivery" | "order";
  userId: string;
}
