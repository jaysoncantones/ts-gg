import { z } from "zod";

const Factory = [
  { key: "all" },
  { key: "lists" },
  { key: "list" },
  { key: "details" },
  { key: "detail" },
] as const;

type Keys = (typeof Factory)[number]["key"];
const Keys = Factory.map((item) => item.key) as [Keys, ...Keys[]];

export const Builder = z.object({
  name: z.string(),
  items: z
    .object({
      key: z.enum(Keys).or(z.string()),
      params: z.string().optional(),
      paramsType: z.string().optional(),
    })
    .array()
    .max(
      Factory.length,
      `Cannot have more than ${Factory.length} factory items`
    )
    .refine(
      (items) => {
        const keys = items.map((item) => item.key);
        return new Set(keys).size === keys.length;
      },
      {
        message: "Each key can only appear once in the items array",
      }
    ),
});

export type Builder = z.infer<typeof Builder>;

export const BuilderDefaults: Builder = {
  name: "demo",
  items: [
    { key: "all", params: "", paramsType: "" },
    { key: "lists", params: "", paramsType: "" },
    { key: "list", params: "filter", paramsType: "Record<string, any>" },
    { key: "details", params: "", paramsType: "" },
    { key: "detail", params: "id", paramsType: "string | number" },
  ],
};
