import {
  useSuspenseQuery,
  useQueryClient,
  //   useMutation,
  QueryClient,
} from "@tanstack/react-query";

import { userQueryOptions } from "~/services/query-options/user-ba";

export const useQueryByAll = () => {
  const queryOptions = userQueryOptions.byAll();
  const { data } = useSuspenseQuery(queryOptions);
  return { data };
};

export const useQueryDataByAll = () => {
  const { data } = useQueryByAll();
  return { data };
};

export const useEnsureQueryDataByAll = async (
  queryClient: QueryClient = useQueryClient()
) => {
  const data = await queryClient.ensureQueryData(userQueryOptions.byAll());
  return { data };
};
