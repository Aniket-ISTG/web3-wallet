import { Card, CardContent } from "@/components/ui/card";

export default function TxHistory({ activeAccount }) {
  if (!activeAccount){
    console.log(activeAccount)
    return null;
  } // 🛡️ safety guard

  return (
    <Card className="bg-white/30 backdrop-blur-xl border-white/20 w-[380px]">
      <CardContent className="p-6 space-y-4">

        <h2 className="text-xl text-white font-semibold">
          Transaction History
        </h2>

        <p className="text-xs text-white font-mono">
          {activeAccount.address.slice(0, 6)}...
          {activeAccount.address.slice(-4)}
        </p>

        <ul className="text-sm text-white space-y-2">
          <li>➡️ Sent 0.5 ETH to 0xB2...4A9</li>
          <li>⬅️ Received 1.2 ETH from 0xC8...91D</li>
          <li>➡️ Sent 0.3 ETH to 0xD1...AA3</li>
        </ul>

      </CardContent>
    </Card>
  );
}
