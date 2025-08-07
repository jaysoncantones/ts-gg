import { useState } from "react";

export function useClipboard(timeout = 1500) {
  const [copied, setCopied] = useState(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
    } catch (err) {
      console.error("Clipboard copy failed:", err);
      setCopied(false);
    }
  };

  return { copy, copied };
}
