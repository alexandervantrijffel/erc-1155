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
exports.LibEIP712__factory = void 0;
var ethers_1 = require("ethers");
var LibEIP712__factory = /** @class */ (function (_super) {
    __extends(LibEIP712__factory, _super);
    function LibEIP712__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    LibEIP712__factory.prototype.deploy = function (domain_hash_1155, overrides) {
        return _super.prototype.deploy.call(this, domain_hash_1155, overrides || {});
    };
    LibEIP712__factory.prototype.getDeployTransaction = function (domain_hash_1155, overrides) {
        return _super.prototype.getDeployTransaction.call(this, domain_hash_1155, overrides || {});
    };
    LibEIP712__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    LibEIP712__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    LibEIP712__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return LibEIP712__factory;
}(ethers_1.ContractFactory));
exports.LibEIP712__factory = LibEIP712__factory;
var _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "domain_hash_1155",
                type: "bytes32"
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
];
var _bytecode = "0x6080604052348015600f57600080fd5b5060405160953803806095833981016040819052602a916031565b6000556049565b600060208284031215604257600080fd5b5051919050565b603f8060566000396000f3fe6080604052600080fdfea26469706673582212203c461e7939f7ff6edfa1b47a2fcf9229003fb0439f61a01de3474617a5a3933264736f6c63430008090033";
