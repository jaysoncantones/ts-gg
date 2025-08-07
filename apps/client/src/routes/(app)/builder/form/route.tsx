import { createFileRoute, Outlet } from "@tanstack/react-router";

import { validateSearch } from "~/components/app/builder/form/route-schema";

import { BuilderForm as QueryKeyFactoryForm } from "~/components/app/builder/form/form-schema-zod";

export const Route = createFileRoute("/(app)/builder/form")({
  component: RouteComponent,
  validateSearch,
});

function RouteComponent() {
  return (
    <div className="flex p-4 gap-10">
      <div className="w-sm py-2">
        <QueryKeyFactoryForm />
      </div>

      <div className="w-fit py-4">
        <div className="flex gap-8">
          <div className="flex flex-col gap-8 h-screen overflow-y-scroll pr-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
