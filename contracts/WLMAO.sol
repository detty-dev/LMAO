//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IReceiver} from "./IReceiver.sol";

contract WrappedLmao is ERC20 {
    address owner;
    IERC20 LMAO;
    constructor(address _LMAO) ERC20("Wrapped LMAO", "WETH") {
      
        LMAO = IERC20(_LMAO);
    }

    function deposit(uint amount) public{
        LMAO.transferFrom(msg.sender, address(this), amount);
        uint value = amount * 8 / 100;
        uint remainingAmount = amount - value;
        _mint(msg.sender, remainingAmount);            
    }

    function withdraw(uint amount) public {
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");
        LMAO.transfer(msg.sender, amount);
        _burn(msg.sender, amount);
    }
}