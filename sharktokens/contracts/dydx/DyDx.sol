pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

import "./Structs.sol";

contract DyDx {
    function operate(Structs.Info[] memory accounts, Structs.ActionArgs[] memory actions) public;
}