import { useState } from "react";
import { sendEth } from "../lib/sendEth";

export default function SendMoney({ account }) {
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [txHash, setTxHash] = useState("");

  async function handleSend() {
    if (!to || !amount) return alert("Missing fields");

    try {
      setLoading(true);

      const hash = await sendEth({
        privateKey: account.privateKey,
        to,
        amount,
      });

      setTxHash(hash);
      alert("Transaction sent!");
    } catch (err) {
      console.error(err);
      alert("Transaction failed");
    } finally {
      setLoading(false);
    }
  }

  if (!account) return null;

  return (
    <div className="bg-white/30 p-6 rounded-xl w-[380px] space-y-4">
      <h2 className="text-xl text-white font-semibold">Send ETH</h2>

      <div>
        <p className="text-xs text-white ">From</p>
        <p className="font-mono text-white text-sm">{account.address}</p>
      </div>

      <input
        placeholder="Recipient address"
        value={to}
        onChange={e => setTo(e.target.value)}
        className="w-full p-2 rounded text-white bg-black/40 border border-white/40"
      />

      <input
        placeholder="Amount (ETH)"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        className="w-full p-2 rounded text-white bg-black/40 border border-white/20"
      />

      <button
        onClick={handleSend}
        disabled={loading}
        className="w-full text-white py-2 rounded bg-indigo-600 hover:bg-indigo-500"
      >
        {loading ? "Sending..." : "Send"}
      </button>

      {txHash && (
        <p className="text-xs text-green-400 break-all">
          Tx Hash: {txHash}
        </p>
      )}
    </div>
  );
}
