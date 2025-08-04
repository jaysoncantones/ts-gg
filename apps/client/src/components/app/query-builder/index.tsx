import { useState } from "react";

import { BuilderForm } from "./builder-form";
import { useBuilderQuery } from "./use-builder-query";
import { QueryBuilderDefaults } from "./builder-schema";

import {
  BuilderForm as BuilderFactoryForm,
  BuilderDisplay as BuilderFactoryDisplay,
} from "./builder-factory";
import { BuilderDisplay as BuilderOptionsDisplay } from "./builder-options";
import { BuilderDisplay as BuilderHooksDisplay } from "./builder-hooks";
import { useSearch } from "@tanstack/react-router";

export const QueryBuilder = () => {
  const { section } = useSearch({ from: "/(app)/query-builder" });
  const { data } = useBuilderQuery(QueryBuilderDefaults);
  const templateCode = data!;

  if (!templateCode) return <></>;

  return (
    <div className="flex p-4 gap-10 ">
      <div className="w-sm py-2">
        <div
          className={
            section === "all" ||
            section === "query-key-factory" ||
            section === "query-options" ||
            section === "query-hooks"
              ? "block"
              : "hidden"
          }
        >
          <BuilderFactoryForm />
        </div>
        {/* <div className={section === "query-options" ? "block" : "hidden"}>
          <BuilderFactoryForm />
        </div> */}
        {/* <div className={section === "query-hooks" ? "block" : "hidden"}>
          <BuilderFactoryForm />
        </div> */}
      </div>

      <div className="w-fit py-4">
        <div className="flex gap-8">
          <div className="flex flex-col gap-8 h-screen overflow-y-scroll">
            <div className={section === "all" ? "block" : "hidden"}>
              <BuilderFactoryDisplay />
              <BuilderOptionsDisplay />
              <BuilderHooksDisplay />
            </div>
            <div
              className={section === "query-key-factory" ? "block" : "hidden"}
            >
              <BuilderFactoryDisplay />
            </div>
            <div className={section === "query-options" ? "block" : "hidden"}>
              <BuilderOptionsDisplay />
            </div>
            <div className={section === "query-hooks" ? "block" : "hidden"}>
              <BuilderHooksDisplay />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
