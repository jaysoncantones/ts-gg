import { createFileRoute } from "@tanstack/react-router";

import { ANOTHERVAR } from "shared";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
      <p>{ANOTHERVAR}</p>
    </div>
  );
}
