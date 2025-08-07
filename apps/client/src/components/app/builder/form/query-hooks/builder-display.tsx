import { BookOpenIcon as DocumentLinkIcon } from "lucide-react";

import { BuilderCodeBlockDisplay } from "./builder-code-block-display";
import { BuilderRegistryCliDisplay } from "./builder-registry-cli-display";

export const BuilderDisplay = () => {
  const docsLink =
    "https://tanstack.com/query/latest/docs/framework/react/guides/queries";

  return (
    <div className="flex flex-col gap-8 mb-12">
      <div className="flex justify-between items-center">
        <h2 className="uppercase tracking-wider text-lg font-semibold">
          Query Hooks
        </h2>
        <a
          href={docsLink}
          target="_blank"
          className="flex gap-2 items-center text-muted-foreground hover:text-black"
        >
          <DocumentLinkIcon className="size-5" />
          <span className="uppercase tracking-wider text-xs">Read Docs</span>
        </a>
      </div>

      <BuilderRegistryCliDisplay />
      <BuilderCodeBlockDisplay />
    </div>
  );
};
