import CopyButton from "./CopyButton";

export default function AccountCard({
  name,
  address,
  balance = "0 ETH",
  usd = "$0.00",
  active = false,
  onClick,
}) {
  return (
    <div
      onClick={() => {
        onClick();
      }}
      
      className={`
        flex items-center justify-between
        p-4 cursor-pointer
        transition-all duration-200
        rounded-3xl border border-gray-400
        ${active
          ? "bg-[#1f2433] ring-2 ring-indigo-500"
          : "bg-[#0f1117] hover:bg-[#181b26]"}
      `}
    >
      {/* Left section */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500" />

        {/* Account info */}
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span className="font-mono">
              {address.slice(0, 6)}...{address.slice(-4)}
            </span>

            <CopyButton text={address} />
          </div>

        </div>
      </div>

      {/* Right section */}
      <div className="text-right">
        <p className="text-sm text-white">{usd}</p>
        <p className="text-xs text-gray-400">{balance}</p>
      </div>
    </div>
  );
}
