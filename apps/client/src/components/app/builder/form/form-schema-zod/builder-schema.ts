import { z } from "zod";

const ZodTypesFactory = [
  { value: "string", label: "String" },
  { value: "number", label: "Number" },
] as const;

type ZodTypes = (typeof ZodTypesFactory)[number]["value"];
const ZodTypes = ZodTypesFactory.map((item) => item.value) as [
  ZodTypes,
  ...ZodTypes[],
];

export const Builder = z.object({
  name: z.string(),
  type: z.enum(ZodTypes),
  min: z.coerce.number().optional(),
  min_message: z.string().optional(),
  max: z.coerce.number().optional(),
  max_message: z.string().optional(),
  description: z.string(),
});

export type Builder = z.infer<typeof Builder>;

export const BuilderDefaults: Builder = {
  name: "demo",
  type: "string",
  description: "a demo field",
};

// FIELDS

const FieldOptionFactory = [{ value: "", label: "", isOption: false }] as const;
type FieldOption = (typeof FieldOptionFactory)[number]["value"];
const FieldOption = FieldOptionFactory.map((item) => item.value) as [
  FieldOption,
  ...FieldOption[],
];

const FieldFactory = [
  { value: "default", label: "Default", isOption: false },
  { value: "email", label: "Email", isOption: false },
  { value: "number", label: "Number", isOption: false },
  { value: "select", label: "Select", isOption: true },
] as const;

type Fields = (typeof FieldFactory)[number]["value"];
const Fields = FieldFactory.map((item) => item.value) as [Fields, ...Fields[]];

export const FieldsForm = z.object({
  name: z.string(),
  type: z.string(),
  options: z.enum(FieldOption).optional(),
});

export type FieldsForm = z.infer<typeof FieldsForm>;

export const FieldsFormDefault: Builder = {
  name: "demo",
  type: "string",
  description: "a demo field",
};
