import { SquareTerminalIcon as BuilderFormIcon } from "lucide-react";
import { linkOptions } from "@tanstack/react-router";

export const getSidebarNavs = () =>
  linkOptions([
    {
      label: "Form Builder",
      to: "/builder/form",
      icon: BuilderFormIcon,
      isActive: true,
      items: linkOptions([
        {
          label: "All",
          to: "/builder/form",
          search: { section: "all" },
        },
        {
          label: "Zod Schema",
          to: "/builder/form",
          search: { section: "form-schema-zod" },
        },
      ]),
    },
  ]);
