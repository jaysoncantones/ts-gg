import { Link, linkOptions } from "@tanstack/react-router";
import { ChevronRight, type LucideIcon, SquareTerminal } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "~/components/ui/sidebar";

const getLinkOptions = () => [
  {
    title: "Query Builder",
    url: "/query-builder",
    icon: SquareTerminal,
    isActive: true,
    items: linkOptions([
      {
        label: "All",
        to: "/query-builder",
        search: { section: "all" },
      },
      {
        label: "Query Key Factory",
        to: "/query-builder",
        search: { section: "query-key-factory" },
      },
      {
        label: "Query Options",
        to: "/query-builder",
        search: { section: "query-options" },
      },
      {
        label: "Query Hooks",
        to: "/query-builder",
        search: { section: "query-hooks" },
      },
    ]),
  },
];

export function NavQueryBuilder() {
  const navs = getLinkOptions();

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="uppercase tracking-widest">
        Tanstack Query
      </SidebarGroupLabel>
      <SidebarMenu>
        {navs.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <Link
                    to={"/query-builder"}
                    className="flex items-center gap-2"
                  >
                    <span className="uppercase tracking-wider text-xs">
                      {item.title}
                    </span>
                  </Link>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.label}>
                      <SidebarMenuSubButton asChild>
                        <Link
                          to={"/query-builder"}
                          search={{ section: subItem.search.section }}
                          className="flex items-center gap-2"
                        >
                          <span className="uppercase tracking-wider text-xs">
                            {subItem.label}
                          </span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
