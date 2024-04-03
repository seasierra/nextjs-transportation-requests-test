import { IPackage } from "@/types";

export const addToDb = (data: IPackage) => {
  const requests: IPackage[] = JSON.parse(
    localStorage.getItem("requests") || "[]"
  );

  requests.push(data);

  localStorage.setItem("requests", JSON.stringify(requests));
};
