# Sample Hardhat 3 Beta Project (minimal)

This project has a minimal setup of Hardhat 3 Beta, without any plugins.

## What's included?

The project includes native support for TypeScript, Hardhat scripts, tasks, and support for Solidity compilation and tests.

# 🪐 Web3 Wallet (Ethereum)

A non-custodial Ethereum wallet frontend that allows users to generate mnemonic-based HD wallets, manage multiple accounts, send ETH transactions, and view on-chain transaction history using Alchemy RPC.

---

## 🚀 Features

- 🔐 **Mnemonic-based wallet generation** (BIP-39)
- 👛 **HD wallet account derivation** (multiple accounts from one mnemonic)
- 💸 **Send ETH transactions** on Ethereum testnet
- 📜 **Transaction history per account**
- 🔄 **Balance fetching & account switching**
- 📋 **Copy public address to clipboard**
- 🌌 **Space-themed responsive UI**

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS  
- **Web3 / Blockchain:** Ethereum, ethers.js  
- **RPC Provider:** Alchemy  
- **Wallet Standards:** BIP-39, HD Wallet derivation  
- **Tooling:** Vite, Git, GitHub  

---

## 🧠 How It Works (High Level)

1. Generates a BIP-39 mnemonic on onboarding  
2. Derives Ethereum accounts using HD wallet paths  
3. Uses `ethers.js` to:
   - Fetch balances
   - Sign & send transactions
4. Connects to Ethereum via **Alchemy RPC**
5. Retrieves transaction history from the blockchain
6. Manages wallet state entirely on the client (non-custodial)

---

## ⚠️ Security Disclaimer

This project is built **for learning and demonstration purposes only**.

- ❌ Private keys and mnemonics are handled in-memory on the client
- ❌ Not intended for production or real fund storage
- ✅ Demonstrates internal workings of a Web3 wallet

---

## 🧪 Supported Network

- Ethereum **Sepolia Testnet**

(Test ETH required from a faucet)

---

## 📦 Local Setup

```bash
git clone https://github.com/Aniket-ISTG/web3-wallet.git
cd web3-wallet
npm install
