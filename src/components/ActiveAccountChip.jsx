import CopyButton from "./CopyButton";

export default function ActiveAccountChip({ account, activeIndex, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center gap-3 px-4 py-2
        rounded-full bg-white/10 hover:bg-white/20
        backdrop-blur-md transition
      "
    >
      {/* Avatar */}
      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500" />

      {/* Info */}
      <div className="text-left">
        <p className="text-xs font-semibold text-white">
          Account {activeIndex + 1}
        </p>
        <p className="text-[11px] text-gray-300">
          {account.address.slice(0, 6)}...{account.address.slice(-4)}
        </p>
      </div>
    </button>
  );
}
