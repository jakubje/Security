const { ethers } = require("hardhat");
const Runner = require("./lib/runner");

Runner.run(async (provider, owner) => {
  const tokenAddress = "0xF5A5Aa9bccC22367F7d689D2A2A10b77a0d9b885";

  const token = await ethers.getContractAt("Token", tokenAddress);
  const initialBalance = await token.balanceOf(owner.address);
  console.log(`our balance of token is ${initialBalance}`);

  console.log("transferring....");
  const tx = await token.transfer(token.address, parseInt(initialBalance) + 1);
  await tx.wait();

  const tokenBalance = await token.balanceOf(owner.address);
  console.log(`token balance is ${tokenBalance}`);
});
