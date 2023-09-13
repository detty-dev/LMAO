//SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LMAO is ERC20 {
    address feeAddress;
    constructor() ERC20("LMAO Token", "LMAO") {
        feeAddress = msg.sender;
    }

    function mint()public{
        _mint(msg.sender, 1000000);
    }

    
    function _transfer(address from, address to, uint256 amount) internal virtual override {
        uint256 fee = amount * 8 / 100;
        uint256 remainingAmount = amount - fee;
       super._transfer(from, feeAddress, fee);
        super._transfer(from, to, remainingAmount);
     
    }
}



         

