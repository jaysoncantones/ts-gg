import { zodValidator } from "@tanstack/zod-adapter";
import { z } from "zod";

export const SearchQueryObjects = [
  { value: "all", label: "All" },
  { value: "form-schema-zod", label: "Form Schema Zod" },
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
