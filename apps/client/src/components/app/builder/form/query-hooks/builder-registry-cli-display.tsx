import { Copy } from "lucide-react";

import { Button } from "~/components/ui/button";
import { useClipboard } from "~/hooks/use-clipboard";

export const BuilderRegistryCliDisplay = () => {
  const { copy, copied } = useClipboard();
  const shadcnCliScript = `pnpm dlx shadcn@latest add https://demo.hodle.xyz/r/query-hooks.json`;

  return (
    <div>
      <div className="flex items-center gap-8 mb-4">
        <span className="uppercase tracking-wider text-muted-foreground text-xs">
          Install with shadcn cli
        </span>
        <Button
          size={"sm"}
          className="uppercase tracking-wider cursor-pointer"
          onClick={() => copy(shadcnCliScript)}
        >
          <Copy />
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
      <span className="text-sm italic">{shadcnCliScript}</span>
    </div>
  );
};
