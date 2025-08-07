import { zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";

export const SearchQueryObjects = [
  { value: "all", label: "All" },
  { value: "query-key-factory", label: "Query Key Factory" },
  {
    value: "query-options",
    label: "Query Options",
  },
  {
    value: "query-hooks",
    label: "Query Hooks",
  },
  {
    value: "mutation-hooks",
    label: "Mutation Hooks",
  },
] as const;

export type SearchQueryOptionsTypes =
  (typeof SearchQueryObjects)[number]["value"];
export const SearchQueryOptionsDefault = SearchQueryObjects[0].value;
export const SearchQueryOptionsEnum = SearchQueryObjects.map(
  (s) => s.value
) as [SearchQueryOptionsTypes, ...SearchQueryOptionsTypes[]];

export const SearchQuery = z.object({
  section: z
    .enum(SearchQueryOptionsEnum)
    .default(SearchQueryOptionsDefault)
    .optional(),
});

export const validateSearch = zodValidator(SearchQuery);
