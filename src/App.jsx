import { useState } from "react";
import Home from "./pages/home.jsx";
import SendMoney from "./pages/send.jsx";
import TxHistory from "./pages/history.jsx";
import OnBoarding from "./pages/OnBoarding.jsx";
import NavBar from "./components/NavBar.jsx";
import { createMnemonic } from "./lib/mnemonics";
import { deriveEthAccount } from "./lib/EthWallet";
import StarBg from "@/components/StartBg";

export default function WalletApp() {
  const [page, setPage] = useState("home");
  const [walletReady, setWalletReady] = useState(false);
  const [mnemonic, setMnemonic] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  function handleGenerateMnemonic() {
    setMnemonic(createMnemonic());
  }

  function handleConfirmMnemonic() {
    const firstAccount = deriveEthAccount(mnemonic, 0);

    setAccounts([
      {
        ...firstAccount,
        balance: "0 ETH",
        usd: "0 USD",
      },
    ]);

    setActiveIndex(0);
    setWalletReady(true);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  const activeAccount = accounts?.[activeIndex];

  // 🔐 ONBOARDING
  if (!walletReady) {
    return (
      <OnBoarding
        mnemonic={mnemonic}
        onGenerate={handleGenerateMnemonic}
        onConfirm={handleConfirmMnemonic}
      />
    );
  }
  // 🌌 MAIN APP
  return (
    <StarBg >
      <div className="relative min-h-screen w-full z-20">

        {/* Navbar */}
        <NavBar
          accounts={accounts}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          setPage={setPage}
          mnemonic={mnemonic}
          setAccounts={setAccounts}
        />

        <main className="relative z-10 flex min-h-screen items-center justify-center -translate-y-56 pointer-events-none">
          <div className="pointer-events-auto">
            {page === "home" && <Home account={activeAccount} />}
            {page === "send" && <SendMoney account={activeAccount} />}
            {page === "history" && <TxHistory activeAccount={activeAccount} />}
          </div>
        </main>


      </div>
    </StarBg>
  );
}
