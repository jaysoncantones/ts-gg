import { Copy } from "lucide-react";

import { Button } from "~/components/ui/button";
import { useClipboard } from "~/hooks/use-clipboard";
import { CodeBlock } from "~/lib/syntax-highlighter";
import { useBuilderQuery } from "./use-builder-query";

export const BuilderCodeBlockDisplay = () => {
  const { copy, copied } = useClipboard();
  const { data } = useBuilderQuery();
  if (!data) return <></>;

  return (
    <div>
      <div className="flex items-center gap-8 mb-4">
        <span className="uppercase tracking-wider text-muted-foreground text-xs">
          copy code block
        </span>
        <Button
          size={"sm"}
          className="uppercase tracking-wider cursor-pointer"
          onClick={() => copy(data.template)}
        >
          <Copy />
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
      <CodeBlock code={data.template} language="javascript" />
    </div>
  );
};
