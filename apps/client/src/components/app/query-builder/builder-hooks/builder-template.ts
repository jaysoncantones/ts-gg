import Handlebars from "handlebars";
import prettier from "prettier/standalone";
import parserBabel from "prettier/plugins/babel";
import parserEstree from "prettier/plugins/estree";
import parserTypescript from "prettier/plugins/typescript";
import parserHtml from "prettier/plugins/html";
import parserCss from "prettier/plugins/postcss";

import { Builder as BuilderFactory } from "../builder-factory/builder-schema";

const template = `
import { useQuery } from '@tanstack/react-query'
import { {{name}}QueryOptions } from './{{name}}.query-options';


{{#each items}}


export const use{{titleCase key}}Query = 
  ({{#if (checkParams params paramsType)}}{{{params}}}: {{{paramsType}}}{{/if}}) =>
  useQuery({{../name}}QueryOptions.{{key}}({{#if (checkParams params paramsType)}}{{params}}{{/if}}))

{{/each}}  


 
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
