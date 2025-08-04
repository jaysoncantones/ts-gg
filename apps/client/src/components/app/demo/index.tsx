// src/components/QueryGenerator.tsx
import { useEffect, useState } from "react";
import Handlebars from "handlebars";

const templateString = `
import { useQuery } from '@tanstack/react-query'

export const {{functionName}} = ({{#each params}}{{this}}{{#unless @last}}, {{/unless}}{{/each}}) =>
  useQuery({
    queryKey: [{{#each queryKey}}'{{this}}'{{#unless @last}}, {{/unless}}{{/each}}],
    queryFn: () =>
      fetch(\`{{url}}\`).then((res) => res.json()),
  })
`;

export const Demo = () => {
  const [functionName, setFunctionName] = useState("useUserData");
  const [params, setParams] = useState("userId");
  const [queryKey, setQueryKey] = useState("user, userId");
  const [url, setUrl] = useState("/api/users/${userId}");
  const [generatedCode, setGeneratedCode] = useState("");

  const generate = () => {
    console.log("sample");
    const compiled = Handlebars.compile(templateString);
    const output = compiled({
      functionName,
      params: params.split(",").map((p) => p.trim()),
      queryKey: queryKey.split(",").map((q) => q.trim()),
      url,
    });
    setGeneratedCode(output);
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">TanStack Query Hook Generator</h1>
      <div className="space-y-2">
        <input
          type="text"
          value={functionName}
          onChange={(e) => setFunctionName(e.target.value)}
          placeholder="Function name"
          className="border p-2 w-full"
        />
        <input
          type="text"
          value={params}
          onChange={(e) => setParams(e.target.value)}
          placeholder="Params (comma separated)"
          className="border p-2 w-full"
        />
        <input
          type="text"
          value={queryKey}
          onChange={(e) => setQueryKey(e.target.value)}
          placeholder="Query Key (comma separated)"
          className="border p-2 w-full"
        />
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="URL (use template syntax like ${userId})"
          className="border p-2 w-full"
        />
        {/* <button
          onClick={() => alert("sample")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Generate
        </button> */}
      </div>

      {generatedCode && (
        <div>
          <h2 className="font-semibold mt-4">Generated Hook:</h2>
          <pre className="bg-gray-100 p-4 overflow-x-auto">
            <code>{generatedCode}</code>
          </pre>
        </div>
      )}
    </div>
  );
};
