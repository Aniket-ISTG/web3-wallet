import { useState } from "react";
import NavButton from "./NavButton";
import ActiveAccountChip from "./ActiveAccountChip";
import AccountSelector from "./AccountSelecter";
import { Wallet, Send, History, PersonStanding } from "lucide-react";


export default function NavBar({
  accounts,
  setAccounts,
  activeIndex,
  setActiveIndex,
  setPage,
  mnemonic,
}) {
  const [showAccountSelector, setShowAccountSelector] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 ">

        {/* Left: Active Account */}
        {accounts?.length > 0 && accounts[activeIndex] && (
          <ActiveAccountChip
            icon={<PersonStanding />}
            account={accounts[activeIndex]}
            activeIndex={activeIndex}
            onClick={() => setShowAccountSelector(true)}
          />
        )}

        {/* Center: Navigation */}
        <div className="flex gap-6  pr-12">
          <NavButton icon={<Wallet />} label="Home" onClick={() => setPage("home")} />
          <NavButton icon={<Send />} label="Send" onClick={() => setPage("send")} />
          <NavButton icon={<History />} label="History" onClick={() => setPage("history")} />
        </div>

        {/* Right spacer */}
        <div className="w-24" />
      </nav>

      {/* Account Selector Modal */}
      {showAccountSelector && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-20">
          <AccountSelector
            accounts={accounts}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            setShowAccountSelector={setShowAccountSelector}
            mnemonic={mnemonic}
            setAccounts={setAccounts}
          />
        </div>
      )}
    </>
  );
}
