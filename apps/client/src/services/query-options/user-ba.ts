import { queryOptions } from "@tanstack/react-query";

import { queryKeysFactory } from "~/services/constants/query-keys";
import { getUserRPC } from "~/services/rpc/user-ba-rpc";

export const userQueryOptions = {
  byAll: () =>
    queryOptions({
      queryKey: queryKeysFactory.users.byAll(),
      queryFn: async () => await getUserRPC(),
    }),
};
