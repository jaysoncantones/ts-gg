import { createFileRoute, useRouteContext } from "@tanstack/react-router";

import { FormDisplay } from "~/components/app/builder/form/form-display";

import {
  useQueryDataByAll as useQueryDataByAll_Users,
  useEnsureQueryDataByAll as useEnsureQueryDataByAll_Users,
} from "~/services/hooks/use-user-ba";

export const Route = createFileRoute("/(app)/builder/form/")({
  beforeLoad: async ({ context }) => {
    // const { queryClient } = context;
    // const { data: usersState } =
    //   await useEnsureQueryDataByAll_Users(queryClient);
    // console.log(usersState);
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <FormDisplay />;
}
