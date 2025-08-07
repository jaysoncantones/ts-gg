import { useSearch } from "@tanstack/react-router";

import { BuilderDisplay as QueryKeyFactoryDisplay } from "./query-key-factory";
import { BuilderDisplay as QueryOptionsDisplay } from "./query-options";
import { BuilderDisplay as QueryHooksDisplay } from "./query-hooks";
import { BuilderDisplay as MutationHooksDisplay } from "./mutation-hooks";

export const QueryDisplay = () => {
  const { section } = useSearch({ from: "/(app)/builder/query" });

  return (
    <>
      <div className={!section || section === "all" ? "block" : "hidden"}>
        <QueryKeyFactoryDisplay />
        <QueryOptionsDisplay />
        <QueryHooksDisplay />
        <MutationHooksDisplay />
      </div>
      <div className={section === "query-key-factory" ? "block" : "hidden"}>
        <QueryKeyFactoryDisplay />
      </div>
      <div className={section === "query-options" ? "block" : "hidden"}>
        <QueryOptionsDisplay />
      </div>
      <div className={section === "query-hooks" ? "block" : "hidden"}>
        <QueryHooksDisplay />
      </div>
      <div className={section === "mutation-hooks" ? "block" : "hidden"}>
        <MutationHooksDisplay />
      </div>
    </>
  );
};
