import { useQuery } from "@tanstack/react-query";
import { demoQueryOptions } from "./query-options";

export const useAllQuery = () => useQuery(demoQueryOptions.all());

export const useListsQuery = () => useQuery(demoQueryOptions.lists());

export const useListQuery = (filter: Record<string, any>) =>
  useQuery(demoQueryOptions.list(filter));

export const useDetailsQuery = () => useQuery(demoQueryOptions.details());

export const useDetailQuery = (id: string | number) =>
  useQuery(demoQueryOptions.detail(id));
