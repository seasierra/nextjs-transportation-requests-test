"use client";

import { IRequest } from "@/types";
import { getRequests, setRequests } from "@/utils/requests";
import { FC, createContext, useContext, useEffect, useState } from "react";

interface IRequestsContext {
  add: (request: IRequest) => void;
  edit: (data: IRequest) => void;
  remove: (id: string) => void;
  list: IRequest[];
  getOne: (id: string) => IRequest | null;
}

const RequestsContext = createContext<IRequestsContext>({
  list: [],
  add: () => {},
  edit: () => {},
  remove: () => {},
  getOne: () => null,
});

export const useRequests = (userId?: string) => {
  const context = useContext(RequestsContext);

  if (userId) {
    return {
      ...context,
      list: context.list.filter((i) => i.userId === userId),
    };
  }

  return context;
};

export const RequestsProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [list, setList] = useState<IRequest[]>(() => getRequests());

  useEffect(() => {
    setRequests(list);
  }, [list]);

  const addItem = (request: IRequest) => setList(list.concat(request));
  const editItem = (request: IRequest) => {
    const newList = list.map((item) => {
      if (item.id !== request.id) return item;

      return request;
    });

    setList(newList);
  };
  const removeItem = (id: string) => setList(list.filter((r) => r.id !== id));
  const getOne = (id: string) => list.filter((i) => i.id === id)[0];

  return (
    <RequestsContext.Provider
      value={{ list, add: addItem, edit: editItem, remove: removeItem, getOne }}
    >
      {children}
    </RequestsContext.Provider>
  );
};
