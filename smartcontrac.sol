// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Curso {
    IERC20 public token;
    address payable public owner;
    uint256 public precio;

    constructor(address _token) {
        owner = payable(msg.sender);
        precio = 40 * 10**18; // Asume que el token tiene 18 decimales, como BUSD
        token = IERC20(_token);
    }

    function comprarCurso() public {
        require(token.balanceOf(msg.sender) >= precio, "Saldo insuficiente");
        require(token.allowance(msg.sender, address(this)) >= precio, "Debe aprobar primero");

        token.transferFrom(msg.sender, owner, precio);
    }
}