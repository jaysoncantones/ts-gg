import { queryOptions } from "@tanstack/react-query";

import { demoQueryKeyFactory } from "./query-key-factory.js";
import { getUsersRPC } from "~/services/rpc/user-ba-rpc";

const allQueryFn = async () => {
  const response = await fetch("sample");
  return [{ id: 0 }];
};

const listsQueryFn = async () => {
  const response = await fetch("sample");
  return [{ id: 0 }];
};

const listQueryFn = async (filter: Record<string, any>) => {
  const response = await fetch("sample");
  return [{ id: 0 }];
};

const detailsQueryFn = async () => {
  const response = await fetch("sample");
  return [{ id: 0 }];
};

const detailQueryFn = async (id: string | number) => {
  const response = await fetch("sample");
  return [{ id: 0 }];
};

export const demoQueryOptions = {
  all: () =>
    queryOptions({
      queryKey: demoQueryKeyFactory.all(),
      queryFn: () => allQueryFn(),
    }),
  lists: () =>
    queryOptions({
      queryKey: demoQueryKeyFactory.lists(),
      queryFn: () => listsQueryFn(),
    }),
  list: (filter: Record<string, any>) =>
    queryOptions({
      queryKey: demoQueryKeyFactory.list(filter),
      queryFn: () => listQueryFn(filter),
    }),
  details: () =>
    queryOptions({
      queryKey: demoQueryKeyFactory.details(),
      queryFn: () => detailsQueryFn(),
    }),
  detail: (id: string | number) =>
    queryOptions({
      queryKey: demoQueryKeyFactory.detail(id),
      queryFn: () => detailQueryFn(id),
    }),
};
