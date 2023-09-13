//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IReceiver {
    function mint() external;
    function deposit(uint amount) external view returns(uint);
    function withdraw(uint amount) external view returns (uint);
}
