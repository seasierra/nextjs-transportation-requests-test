"use client";

import { IRequest } from "@/types";

export const getRequests = (): IRequest[] =>
  JSON.parse(localStorage.getItem("requests") || "[]");

export const setRequests = (data: IRequest[]) =>
  localStorage.setItem("requests", JSON.stringify(data));

export const addToDb = (data: IRequest) => {
  const requests = getRequests();

  requests.push(data);

  setRequests(requests);
};

export const removeFromDb = (id: string) => {
  const nextRequests = getRequests().filter((p) => p.id !== id);

  setRequests(nextRequests);
};
