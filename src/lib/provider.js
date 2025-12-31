import { JsonRpcProvider } from "ethers";

export const provider = new JsonRpcProvider(
  import.meta.env.VITE_ALCHEMY_RPC_URL
);
