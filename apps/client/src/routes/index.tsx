import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: async ({ context }) => {},
  component: RouteComponent,
});

function RouteComponent() {
  return <>/</>;
}
