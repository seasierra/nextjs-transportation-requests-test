"use client";

import { IPackage } from "@/types";

export const getRequests = (): IPackage[] =>
  JSON.parse(localStorage.getItem("requests") || "[]");

export const addToDb = (data: IPackage) => {
  const requests = getRequests();

  requests.push(data);

  localStorage.setItem("requests", JSON.stringify(requests));
};
