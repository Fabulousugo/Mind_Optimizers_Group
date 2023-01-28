

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

/*This   smart contract written in the Solidity programming language. It defines a contract called "Transactions" with a single event called "Transfer" and a function called "publishTransaction".

The "Transfer" event has 6 parameters:

"sender" is the address of the sender of the transaction.
"receiver" is the address of the receiver of the transaction.
"amount" is the amount of the transaction in units of the currency.
"message" is a string that contains the message associated with the transaction.
"timestamp" is the timestamp of the block in which the transaction was included.
"keyword" is a string that contains keyword associated with the transaction.*/

contract Transactions {
    event Transfer (address sender, address receiver, uint amount, string message, uint256 timestamp, string keyword);
    /*The "publishTransaction" function has 4 parameters:

"receiver" is the address of the receiver of the transaction.
"amount" is the amount of the transaction in units of the currency.
"message" is a string that contains the message associated with the transaction.
"keyword" is a string that contains keyword associated with the transaction.
The function is defined as "public", which means that it can be called by any external account.

This function emit the Transfer event with the msg.sender, receiver, amount, message, block.timestamp and keyword as arguments.*/
    function publishTransaction(address payable receiver, uint amount, string memory message, string memory keyword) public {
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }
}

/*This contract is intended to be used as a way to keep track of transactions between different addresses on the blockchain, including the details of the transaction, such as
the sender and receiver addresses, the amount transferred, a message,
a keyword and the timestamp of the block in which the transaction was included.*/
