"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.OwnableMock__factory = void 0;
var ethers_1 = require("ethers");
var OwnableMock__factory = /** @class */ (function (_super) {
    __extends(OwnableMock__factory, _super);
    function OwnableMock__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    OwnableMock__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    OwnableMock__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    OwnableMock__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    OwnableMock__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    OwnableMock__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return OwnableMock__factory;
}(ethers_1.ContractFactory));
exports.OwnableMock__factory = OwnableMock__factory;
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            },
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        inputs: [],
        name: "nonOwnerCall",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "ownerCall",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_newOwner",
                type: "address"
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
];
var _bytecode = "0x60806040526000600155600060025534801561001a57600080fd5b50600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3610403806100816000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063776e8c30146100515780638da5cb5b1461005b578063aae7aa4b14610087578063f2fde38b1461008f575b600080fd5b6100596100a2565b005b6000546040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100596100bc565b61005961009d366004610351565b61017a565b6001600260008282546100b5919061038e565b9091555050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610168576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c65236f6e6c794f776e65723a2053454e4445525f49535f4e4f5460448201527f5f4f574e4552000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b60018060008282546100b5919061038e565b60005473ffffffffffffffffffffffffffffffffffffffff163314610221576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c65236f6e6c794f776e65723a2053454e4445525f49535f4e4f5460448201527f5f4f574e45520000000000000000000000000000000000000000000000000000606482015260840161015f565b73ffffffffffffffffffffffffffffffffffffffff81166102c4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f4f776e61626c65237472616e736665724f776e6572736869703a20494e56414c60448201527f49445f4144445245535300000000000000000000000000000000000000000000606482015260840161015f565b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60006020828403121561036357600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461038757600080fd5b9392505050565b600082198211156103c8577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b50019056fea2646970667358221220d2f9b093b29e73f96d48153b0a4c9339c4cb922e2e502f0d38f316e1de11974c64736f6c63430008090033";
