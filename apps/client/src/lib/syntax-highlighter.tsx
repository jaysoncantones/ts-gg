import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeBlock = ({
  code,
  language,
}: {
  code: string | string[];
  language: string;
}) => (
  <SyntaxHighlighter
    className="rounded-xl w-full"
    language={language}
    // style={tomorrow}
    showLineNumbers={true}
    wrapLines={true}
  >
    {code}
  </SyntaxHighlighter>
);
