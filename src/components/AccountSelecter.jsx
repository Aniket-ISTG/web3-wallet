import AccountCard from "./AccountCard";
import { deriveEthAccount } from "../lib/EthWallet";
import {useRef, useEffect} from "react";

export default function AccountSelector({ accounts, activeIndex, setActiveIndex, setShowAccountSelector, mnemonic, setAccounts}) {
  const listRef = useRef(null);
  useEffect(() => {
    if (!listRef.current) return;

    const activeEl = listRef.current.querySelector(
      `[data-index="${activeIndex}"]`
    );

    if (activeEl) {
      activeEl.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [activeIndex]);

  return (
    <div className="w-[380px] bg-[#0b0d13] rounded-2xl p-4 space-y-4 shadow-2xl">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-white font-semibold">Select an account</h2>
        <button onClick={() => setShowAccountSelector(false)} className="text-gray-400 hover:text-white">✕</button>
      </div>



      {/* Accounts */}
      <div
        ref={listRef}
        className="space-y-2 max-h-[260px] overflow-y-auto scrollbar-hide"
      >
        {accounts.map((acc, i) => (
          <div key={i} data-index={i}>
            <AccountCard
              name={`Account ${i + 1}`}
              address={acc.address}
              balance={acc.balance}
              usd={acc.usd}
              active={i === activeIndex}
              onClick={() => {
                setActiveIndex(i);
                setShowAccountSelector(false);
              }}
            />
          </div>
        ))}
      </div>

      {/* Add account */}
      <button onClick={() => {
        const newIdx = accounts.length;
        const newAccount = deriveEthAccount(mnemonic, accounts.length);
        setAccounts([...accounts, {
          ...newAccount,
          balance: "0 ETH",
          usd: "0 USD"
        }]);
        setActiveIndex(newIdx);
      }} className="w-full mt-2 py-3 rounded-xl border border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 transition">
        + Add account or hardware wallet
      </button>
    </div>
  );
}
