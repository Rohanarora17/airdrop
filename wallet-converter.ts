import bs58 from "bs58";

import prompt from 'prompt-sync';
 
const promptSync = prompt();



function base58ToWallet() {
  const base58 = promptSync("Enter your base58 private key: ");
  try {
    const wallet = bs58.decode(base58);
    console.log("Wallet byte array:", Array.from(wallet));
  } catch (error) {
    console.error("Invalid base58 string");
  }
}


function walletToBase58() {
  const walletString = promptSync(
    "Enter your wallet byte array (comma-separated): "
  );
  try {
    const walletArray = walletString.split(",").map(Number);
    const base58 = bs58.encode(Buffer.from(walletArray));
    console.log("Base58 private key:", base58);
  } catch (error) {
    console.error("Invalid wallet byte array");
  }
}


function main() {
  const choice = promptSync(
    "Choose conversion direction (1: base58 to wallet, 2: wallet to base58): "
  );
  if (choice === "1") {
    base58ToWallet();
  } else if (choice === "2") {
    walletToBase58();
  } else {
    console.error("Invalid choice");
  }
}

main();
