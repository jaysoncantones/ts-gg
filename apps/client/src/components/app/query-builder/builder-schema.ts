import { z } from "zod";

const Factory = [
  { key: "all" },
  { key: "lists" },
  { key: "list" },
  { key: "details" },
  { key: "detail" },
];

export type Keys = (typeof Factory)[number]["key"];
export const Keys = Factory.map((item) => item.key) as [Keys, ...Keys[]];

export const KeyFactoryBuilder = z.object({
  name: z.string(),
  items: z
    .object({
      key: z.enum(Keys),
      params: z.record(z.any()).optional(),
    })
    .array(),
});

export const QueryBuilder = z.object({
  functionName: z.string(),
  functionParams: z.string(),
  queryKey: z.string(),
  queryFunctionAPI: z.string(),
  queryFunctionName: z.string(),
  queryKeysName: z.string(),
});

// export const defaultValues = QueryBuilder.extend({
//   functionName: z.string().default("useDemoQuery"),
//   functionParams: z.string().default("id"),
//   queryKey: z.string().default("user, {id}"),
//   apiUrl: z.string().default("https://domain/api"),
// });

export const QueryBuilderDefaults: QueryBuilder = {
  functionName: "useDemoQuery",
  functionParams: "id",
  queryKey: "user, {id}",
  queryFunctionAPI: "https://domain/api",
  queryFunctionName: "queryFunctionName",
  queryKeysName: "queryKeysName",
};

export const QueryBuilderSchema = QueryBuilder;
export type QueryBuilder = z.infer<typeof QueryBuilder>;
