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

type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K;
}[keyof T];

export const sortByDate = (
  requests: IRequest[],
  field: RequiredKeys<IRequest>,
  direction?: "ascending" | "descending"
) =>
  requests.sort((a, b) => {
    if (direction === "descending")
      return new Date(b[field]).getTime() - new Date(a[field]).getTime();

    return new Date(a[field]).getTime() - new Date(b[field]).getTime();
  });
