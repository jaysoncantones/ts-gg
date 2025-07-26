import { createFileRoute, useRouteContext } from "@tanstack/react-router";
import { hc } from "hono/client";

// import { AppRPCType, TblBAUser } from "shared";
// import { getUserRPC } from "~/services/rpc/user-ba-rpc";

import {
  useQueryDataByAll as useQueryDataByAll_Users,
  useEnsureQueryDataByAll as useEnsureQueryDataByAll_Users,
} from "~/services/hooks/use-user-ba";

export const Route = createFileRoute("/(demo)/orpc/")({
  beforeLoad: async ({ context }) => {
    const { queryClient } = context;
    const { data: usersState } = await useEnsureQueryDataByAll_Users(
      queryClient
    );

    console.log(usersState, " usersState");

    // const client = hc<AppRPCType>("http://localhost:8787/");
    // const res = await client.demo.$get();
    // const result = await res.json();
    // const { data, success, error } = TblBAUser.safeParse(result);
    // if (error) console.error(error);
    // // if (success) console.log(data);
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p>Consume an ORPC endpoint from the server ANOTHERVAR</p>
    </div>
  );
}
