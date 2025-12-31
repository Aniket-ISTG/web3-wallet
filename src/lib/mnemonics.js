import { generateMnemonic } from "@scure/bip39";
import { wordlist as english } from "@scure/bip39/wordlists/english.js";

export function createMnemonic() {
  return generateMnemonic(english);
}
