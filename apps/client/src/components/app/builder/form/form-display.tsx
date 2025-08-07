import { useSearch } from "@tanstack/react-router";

import { BuilderDisplay as QueryKeyFactoryDisplay } from "./query-key-factory";
import { BuilderDisplay as QueryOptionsDisplay } from "./query-options";
import { BuilderDisplay as QueryHooksDisplay } from "./query-hooks";
import { BuilderDisplay as MutationHooksDisplay } from "./mutation-hooks";

export const FormDisplay = () => {
  const { section } = useSearch({ from: "/(app)/builder/form" });

  return (
    <>
      <div className={!section || section === "all" ? "block" : "hidden"}>
        <QueryKeyFactoryDisplay />
        <QueryOptionsDisplay />
        <QueryHooksDisplay />
        <MutationHooksDisplay />
      </div>
      <div className={section === "form-schema-zod" ? "block" : "hidden"}>
        <QueryKeyFactoryDisplay />
      </div>
    </>
  );
};
