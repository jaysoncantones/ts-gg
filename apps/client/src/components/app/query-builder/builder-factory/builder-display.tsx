import { CodeBlock } from "../builder-generated-output";
import { useBuilderQuery } from "./use-builder-query";
import { BuilderDefaults } from "./builder-schema";

export const BuilderDisplay = () => {
  const { data } = useBuilderQuery(BuilderDefaults);
  if (!data) return <></>;

  return (
    <div>
      <h2 className="uppercase tracking-wider text-sm font-semibold">
        Query Key Factory
      </h2>
      <CodeBlock code={data.template} language="javascript" />
    </div>
  );
};
