import { HDNodeWallet } from "ethers";

/**
 * Derive ONE new Ethereum account
 * @param {string} mnemonic
 * @param {number} index
 */
export function deriveEthAccount(mnemonic, index) {
  const path = `m/44'/60'/0'/0/${index}`;
  const wallet = HDNodeWallet.fromPhrase(mnemonic, undefined, path);

  return {
    index,
    address: wallet.address,
    privateKey: wallet.privateKey,
  };
}
