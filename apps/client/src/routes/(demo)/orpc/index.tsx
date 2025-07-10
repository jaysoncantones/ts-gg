import { createFileRoute } from "@tanstack/react-router";
import { hc } from "hono/client";

import { ANOTHERVAR, DemoAppType } from "shared";

export const Route = createFileRoute("/(demo)/orpc/")({
  beforeLoad: async () => {
    const client = hc<DemoAppType>("http://localhost:8787/");
    const res = await client.demo.$get();
    const data = await res.json();
    console.log(data, " DATA");
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <p>Consume an ORPC endpoint from the server ANOTHERVAR {ANOTHERVAR}</p>
    </div>
  );
}
