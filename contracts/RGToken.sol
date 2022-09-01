//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RGToken is ERC20 {
    constructor() ERC20("Red Graz Token", "NDT") {
        _mint(msg.senderm 100000 * (10 ** 18));
    }
}