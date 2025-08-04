import Handlebars from "handlebars";
import prettier from "prettier/standalone";
import parserBabel from "prettier/plugins/babel";
import parserEstree from "prettier/plugins/estree";
import parserTypescript from "prettier/plugins/typescript";
import parserHtml from "prettier/plugins/html";
import parserCss from "prettier/plugins/postcss";

import { QueryBuilder } from "./builder-schema";

const template_1 = `
import { useQuery } from '@tanstack/react-query'

export const {{functionName}} = ({{#each functionParams}}{{this}}{{#unless @last}}, {{/unless}}{{/each}}) =>
  useQuery({
    queryKey: [{{#each queryKey}} {{{templateHelper_queryKeyItem this}}}{{#unless @last}}, {{/unless}}{{/each}}],
    queryFn: () =>
      fetch(\`{{queryFunctionAPI}}\`).then((res) => res.json()),
  })
`;

const template_query_hooks = `
import { useQuery } from '@tanstack/react-query'

const {{queryFunctionName}} = async () => {
  const response = await fetch( \'{{queryFunctionAPI}}\');
} 

export const {{functionName}} = ({{#each functionParams}}{{this}}{{#unless @last}}, {{/unless}}{{/each}}) =>
  useQuery({
    queryKey: [{{#each queryKey}} {{{templateHelper_queryKeyItem this}}}{{#unless @last}}, {{/unless}}{{/each}}],    
    queryFn: {{queryFunctionName}},
  })
`;

const template_query_factory = `
export const {{queryKeysName}} = {
    all: () => ["users"] ,
    lists: () => [...{{queryKeysName}}.all, 'list'] ,
    list: (filters: Record<string, any>) => [...{{queryKeysName}}.lists(), { filters }],
    details: () => [...{{queryKeysName}}.all, 'detail'] ,
    detail: (id: string | number) => [...{{queryKeysName}}.details(), id] ,
} as const;
`;

const template_4 = `
import { useQuery } from '@tanstack/react-query'

const {{queryFunctionName}} = async () => {
  const response = await fetch( \'{{queryFunctionAPI}}\');
} 

export const {{functionName}} = ({{#each functionParams}}{{this}}{{#unless @last}}, {{/unless}}{{/each}}) =>
  useQuery({
    queryKey: {{queryKeysName}}.detail(id),    
    queryFn: {{queryFunctionName}},
  })
`;

const template_query_options = `
import { queryOptions } from '@tanstack/react-query'

import { {{queryKeysName}} } from './{{queryKeysName}}.ts'
import { getUsersRPC } from '~/services/rpc/user-ba-rpc'

export const userQueryOptions = {
  all: () =>
    queryOptions({
      queryKey: {{queryKeysName}}.{{queryKeysName}}.all,
      queryFn: () => null,
    })
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

const compile_query_factory = async (data: QueryBuilder) => {
  const compiled = Handlebars.compile(template_query_factory);
  const compiledOutput = compiled({
    functionName: data.functionName,
    functionParams: utilQueryParamsParser(data.functionParams),
    queryKey: utilQueryKeyParser(data.queryKey),
    queryFunctionName: data.queryFunctionName,
    queryFunctionAPI: data.queryFunctionAPI,
    queryKeysName: data.queryKeysName,
  });
  const formattedOutput = await utilTemplatePrettify(compiledOutput);

  return formattedOutput;
};

const compile_query_options = async (data: QueryBuilder) => {
  const compiled = Handlebars.compile(template_query_options);
  const compiledOutput = compiled({
    functionName: data.functionName,
    functionParams: utilQueryParamsParser(data.functionParams),
    queryKey: utilQueryKeyParser(data.queryKey),
    queryFunctionName: data.queryFunctionName,
    queryFunctionAPI: data.queryFunctionAPI,
    queryKeysName: data.queryKeysName,
  });
  const formattedOutput = await utilTemplatePrettify(compiledOutput);

  return formattedOutput;
};

const compile_query_hooks = async (data: QueryBuilder) => {
  const compiled = Handlebars.compile(template_query_hooks);
  const compiledOutput = compiled({
    functionName: data.functionName,
    functionParams: utilQueryParamsParser(data.functionParams),
    queryKey: utilQueryKeyParser(data.queryKey),
    queryFunctionName: data.queryFunctionName,
    queryFunctionAPI: data.queryFunctionAPI,
    queryKeysName: data.queryKeysName,
  });
  const formattedOutput = await utilTemplatePrettify(compiledOutput);

  return formattedOutput;
};

export const compile = async (data: QueryBuilder) => {
  const query_factory = await compile_query_factory(data);
  const query_options = await compile_query_options(data);
  const query_hooks = await compile_query_hooks(data);

  return { query_factory, query_options, query_hooks };
};
