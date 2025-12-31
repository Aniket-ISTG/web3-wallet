import { Card, CardContent } from "@/components/ui/card";
import CopyButton from "@/components/CopyButton";

export default function Home({ account }) {
  if (!account) return null;

  return (
    <Card className="bg-white/30 backdrop-blur-xl border-white/20 w-[380px]">
      <CardContent className="p-6 space-y-4">

        <h2 className="text-xl font-semibold text-white">Wallet Overview</h2>

        {/* Balance */}
        <div>
          <p className="text-sm text-gray-300">Balance</p>
          <p className="text-3xl text-white font-bold">{account.balance}</p>
        </div>

        {/* Public Address */}
        <div className="text-sm text-gray-300">
          <p>Public Address</p>
          <div className="flex items-center gap-2">
            <p className="break-all text-white font-mono">
              {account.address}
            </p>
            <CopyButton text={account.address} />
          </div>
        </div>

        {/* Private Key (masked) */}
        <div className="text-sm text-gray-300">
          <p>Private Key</p>
          <p className="break-all text-red-400 font-mono">
            ••••••{account.privateKey.slice(-6)}
          </p>
        </div>

      </CardContent>
    </Card>
  );
}
