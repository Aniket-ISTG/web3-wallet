import { Wallet, parseEther } from "ethers";
import { provider } from "./provider";

export async function sendEth({
  privateKey,
  to,
  amount,
}) {
  // 1️⃣ Create wallet instance
  const wallet = new Wallet(privateKey, provider);

  // 2️⃣ Create transaction
  const tx = {
    to,
    value: parseEther(amount), // ETH → wei
  };

  // 3️⃣ Send transaction
  const txResponse = await wallet.sendTransaction(tx);

  // 4️⃣ Wait for confirmation (optional)
  await txResponse.wait();

  return txResponse.hash;
}
