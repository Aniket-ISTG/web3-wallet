import StartBg from "@/components/StartBg";

export default function OnBoarding({ mnemonic, onGenerate, onConfirm }) {
  return (
    <StartBg>
      <div className="min-h-screen flex items-center justify-center text-white">
      <div className="bg-black backdrop-blur-xl p-8 rounded-2xl w-[380px] space-y-6 border border-white/10">
        <h1 className="text-xl font-semibold text-center">
          Create your wallet
        </h1>

        {!mnemonic ? (
          <button
            onClick={onGenerate}
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition"
          >
            Generate Mnemonic
          </button>
        ) : (
          <>
            <div className="bg-black/50 p-4 rounded-lg text-sm leading-relaxed border border-red-400 text-red-300">
              {mnemonic.split(" ").map((word, index, arr) => (
                <span key={index}>
                  <span className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition">
                    {index + 1}. {word}
                  </span>

                  {(index + 1) % 3 === 0 && index !== arr.length - 1 && <br />}
                </span>
              ))}
            </div>


            <p className=" text-red-400 text-center text-lg">
              ⚠️ Save these words securely. Anyone with this can access your wallet.
            </p>

            <button
              onClick={onConfirm}
              className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-500 transition"
            >
              I have saved my mnemonic
            </button>
          </>
        )}
      </div>
    </div>
    </StartBg>
    
  );
}
