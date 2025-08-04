import { CodeBlock } from "../builder-generated-output";
import { useBuilderQuery } from "./use-builder-query";

export const BuilderDisplay = () => {
  const { data } = useBuilderQuery();
  if (!data) return <></>;

  return (
    <div>
      <h2 className="uppercase tracking-wider text-sm font-semibold">
        Query Options
      </h2>
      <CodeBlock code={data.template} language="javascript" />
    </div>
  );
};
