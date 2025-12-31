import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (err) {
      console.error("Copy failed", err);
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="p-1 rounded hover:bg-white/10 transition"
      title="Copy address"
    >
      {copied ? (
        <Check size={16} className="text-green-400" />
      ) : (
        <Copy size={16} className="text-gray-400" />
      )}
    </button>
  );
}
