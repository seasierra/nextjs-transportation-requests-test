"use client";

import { IRequest } from "@/types";

export const getRequests = (): IRequest[] => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("requests") || "[]");
  }

  return [];
};

export const setRequests = (data: IRequest[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("requests", JSON.stringify(data));
  }

  return [];
};

export const addToDb = (data: IRequest) => {
  const requests = getRequests();

  requests.push(data);

  setRequests(requests);
};

export const removeFromDb = (id: string) => {
  const nextRequests = getRequests().filter((p) => p.id !== id);

  setRequests(nextRequests);
};
