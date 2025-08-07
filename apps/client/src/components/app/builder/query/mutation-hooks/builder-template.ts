import Handlebars from "handlebars";
import prettier from "prettier/standalone";
import parserBabel from "prettier/plugins/babel";
import parserEstree from "prettier/plugins/estree";
import parserTypescript from "prettier/plugins/typescript";
import parserHtml from "prettier/plugins/html";
import parserCss from "prettier/plugins/postcss";

import { Builder as BuilderFactory } from "../query-key-factory/builder-schema";

const template = `
import { useQuery } from '@tanstack/react-query'
import { {{name}}QueryOptions } from './query-options';

type {{titleCase name}}PayloadType = {
  id: string;
};

const updateMutationFn = async ({{name}}Payload: {{titleCase name}}PayloadType) => {
  const response = await fetch("sample");
  return [{ id: 1 }];
};

const {{name}}MutationFn = async () => {
  // const response = await fetch('sample');
  return {
    id
  }
} 

export const use{{titleCase name}}Mutation = () => {
const queryClient = useQueryClient()

// using all as a starting template but feel
// free to add list, details and etc... 
// also consider reading the Tanstack docs
const { queryKey } = {{name}}QueryOptions.all();

const mutation = useMutation({
  mutationFn: async ({{name}}Payload: {{titleCase name}}PayloadType) => {
      await {{name}}MutationFn({{name}}Payload);
    },
  // When mutate is called:
  onMutate: async (new{{titleCase name}}) => {
    // Cancel any outgoing refetches
    // (so they don't overwrite our optimistic update)
    await queryClient.cancelQueries({ queryKey })

    // Snapshot the previous value
    const previousTodo = queryClient.getQueryData(queryKey)

    // Optimistically update to the new value
    queryClient.setQueryData(queryKey, new{{titleCase name}})

    // Return a context with the previous and new todo
    return { previous{{titleCase name}}, new{{titleCase name}} }
  },
  // If the mutation fails, use the context we returned above
  onError: (err, new{{titleCase name}}, context) => {
    queryClient.setQueryData(
      ['{{name}}', context.new{{titleCase name}}.id],
      context.previous{{titleCase name}},
    )
  },
  // Always refetch after error or success:
 onSettled: () => queryClient.invalidateQueries({ queryKey }),
})

return {
  mutation
}

}


`;

const languageConfig = {
  javascript: { parser: "babel", plugins: [parserBabel, parserEstree] },
  typescript: {
    parser: "typescript",
    plugins: [parserTypescript, parserEstree],
  },
  css: { parser: "css", plugins: [parserCss] },
  html: { parser: "html", plugins: [parserHtml] },
  json: { parser: "json", plugins: [parserBabel, parserEstree] },
};

Handlebars.registerHelper("titleCase", function (str: string) {
  return str.replace(
    /\w\S*/g,
    (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
  );
});

Handlebars.registerHelper("checkParams", function (params, paramsType) {
  if (!params) return false;
  if (params) {
    if (!paramsType) return false;
    if (paramsType) return true;
  }
});

Handlebars.registerHelper("eq", function (a, b) {
  return a === b;
});

Handlebars.registerHelper("templateHelper_queryKeyItem", function (item) {
  if (typeof item === "string") {
    return `'${item}'`;
  }

  if (typeof item === "object" && item !== null) {
    const entries = Object.entries(item)
      .map(([key, value]) => `${key}: ${value}`)
      .join(", ");
    return `{ ${entries} }`;
  }

  return item;
});

const utilQueryParamsParser = (input: string): string[] => {
  return input.split(",").map((p) => p.trim());
};

const utilQueryKeyParser = (
  input: string
): (string | Record<string, string>)[] => {
  return input.split(",").map((part) => {
    const trimmed = part.trim();
    const objectMatch = trimmed.match(/^\{(.+)\}$/);
    if (objectMatch) {
      const key = objectMatch[1].trim();
      return { [key]: key };
    }
    return trimmed;
  });
};

const utilTemplatePrettify = async (output: string) => {
  const config = languageConfig["typescript"];
  const formatted = await prettier.format(output, {
    ...config,
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: "es5",
    printWidth: 80,
    bracketSpacing: true,
    arrowParens: "avoid",
  });
  return formatted;
};

export const output = async (data: BuilderFactory) => {
  const compiled = Handlebars.compile(template);
  const compiledOutput = compiled({
    name: data.name,
    items: data.items,
  });
  const formattedOutput = await utilTemplatePrettify(compiledOutput);

  return {
    data,
    template: formattedOutput,
  };
};
