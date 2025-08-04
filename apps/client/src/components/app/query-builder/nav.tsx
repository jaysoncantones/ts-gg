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

export const Nav = () => {
  const [tab, tabSet] = useState("query-factory");

  return (
    <div className="w-[200px] p-4 border-r border-gray-200">
      <ul className="uppercase tracking-wider text-sm font-semibold flex flex-col gap-2">
        <li onClick={() => tabSet("query-factory")} className="cursor-pointer">
          Query Key Factory
        </li>
        <li onClick={() => tabSet("query-options")} className="cursor-pointer">
          Query Options
        </li>
        <li onClick={() => tabSet("query-hooks")} className="cursor-pointer">
          Query Hooks
        </li>
      </ul>
    </div>
  );
};
