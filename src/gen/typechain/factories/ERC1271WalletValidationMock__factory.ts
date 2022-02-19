/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BytesLike,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ERC1271WalletValidationMock } from "../ERC1271WalletValidationMock";

export class ERC1271WalletValidationMock__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    domain_hash_1155: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1271WalletValidationMock> {
    return super.deploy(
      domain_hash_1155,
      overrides || {}
    ) as Promise<ERC1271WalletValidationMock>;
  }
  getDeployTransaction(
    domain_hash_1155: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(domain_hash_1155, overrides || {});
  }
  attach(address: string): ERC1271WalletValidationMock {
    return super.attach(address) as ERC1271WalletValidationMock;
  }
  connect(signer: Signer): ERC1271WalletValidationMock__factory {
    return super.connect(signer) as ERC1271WalletValidationMock__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1271WalletValidationMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1271WalletValidationMock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "domain_hash_1155",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ERC1271_INVALID",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ERC1271_MAGICVALUE_BYTES32",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ERC1271_MAGIC_VAL",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516110c73803806110c783398101604081905261002f91610061565b600055600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000163317905561007a565b60006020828403121561007357600080fd5b5051919050565b61103e806100896000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b14610137578063a886100f1461017c578063bc197c81146101a3578063f23a6e61146101db57600080fd5b80630c0b5b8b1461008d5780631626ba7e146100ea57806320c13b0b146100fd5780632ec40aa414610110575b600080fd5b6100b47f20c13b0b0000000000000000000000000000000000000000000000000000000081565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020015b60405180910390f35b6100b46100f8366004610b76565b610213565b6100b461010b366004610bc2565b61041c565b6100b47f1626ba7e0000000000000000000000000000000000000000000000000000000081565b6001546101579073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100e1565b6100b47fdeadbeef0000000000000000000000000000000000000000000000000000000081565b6100b46101b1366004610de3565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b6100b46101e9366004610e8d565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b60008061025a600085858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506107e79050565b905060006102a2602086868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506107e79050565b90506000858560408181106102b9576102b9610ef2565b6040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c81018b905292013560f81c925060009160019150605c01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600084529083018083525260ff851690820152606081018690526080810185905260a0016020604051602081039080840390855afa158015610377573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015160015490925073ffffffffffffffffffffffffffffffffffffffff80841691161490506103ec577fdeadbeef0000000000000000000000000000000000000000000000000000000061040e565b7f1626ba7e000000000000000000000000000000000000000000000000000000005b9450505050505b9392505050565b600080610463600087878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506107e79050565b905060006060807fce0b514b3931bdbe4d5d44e4f035afe7113767b7db71949271f6a62d9c60f5588414156105bf576104d489898080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250925060e0915061089f9050565b915060006104e38360606107e7565b905060006104f28460806107e7565b90506042821415806105045750606481115b1561053857507fdeadbeef0000000000000000000000000000000000000000000000000000000095506107df945050505050565b61057c8b8b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525060e092508e915061089f9050565b92506105b684848051906020012060405160200161059b929190610f51565b604051602081830303815290604052805190602001206109e2565b945050506105da565b88886040516105cf929190610f73565b604051809103902092505b6000610620600089898080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506107e79050565b9050600061066860208a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506107e79050565b905060008989604081811061067f5761067f610ef2565b6040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c81018a905292013560f81c925060009160019150605c01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181528282528051602091820120600084529083018083525260ff851690820152606081018690526080810185905260a0016020604051602081039080840390855afa15801561073d573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015160015490925073ffffffffffffffffffffffffffffffffffffffff80841691161490506107b2577fdeadbeef000000000000000000000000000000000000000000000000000000006107d4565b7f20c13b0b000000000000000000000000000000000000000000000000000000005b985050505050505050505b949350505050565b60006107f4826020610fb2565b83511015610889576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603c60248201527f4c696242797465732372656164427974657333323a20475245415445525f4f5260448201527f5f455155414c5f544f5f33325f4c454e4754485f52455155495245440000000060648201526084015b60405180910390fd5b610894602083610fb2565b929092015192915050565b60608183111561090b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4552433132373157616c6c65744d6f636b23736c6963653a204572726f7200006044820152606401610880565b8351821115610976576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4552433132373157616c6c65744d6f636b23736c6963653a204572726f7200006044820152606401610880565b6109808383610fca565b67ffffffffffffffff81111561099857610998610c57565b6040519080825280601f01601f1916602001820160405280156109c2576020820181803683370190505b5090506104156020820184602087016109db9190610fb2565b8351610a4d565b60006040518060400160405280600281526020017f190100000000000000000000000000000000000000000000000000000000000081525060005483604051602001610a3093929190610fe1565b604051602081830303815290604052805190602001209050919050565b6020811015610a94578151835160208390036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0180199092169116178352505050565b82821415610aa157505050565b82821115610adb5760208103905080820181840181515b82851015610ad3578451865260209586019590940193610ab8565b905250505050565b60208103905080820181840183515b81861215610b2457825182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09283019290910190610aea565b85525050505050565b60008083601f840112610b3f57600080fd5b50813567ffffffffffffffff811115610b5757600080fd5b602083019150836020828501011115610b6f57600080fd5b9250929050565b600080600060408486031215610b8b57600080fd5b83359250602084013567ffffffffffffffff811115610ba957600080fd5b610bb586828701610b2d565b9497909650939450505050565b60008060008060408587031215610bd857600080fd5b843567ffffffffffffffff80821115610bf057600080fd5b610bfc88838901610b2d565b90965094506020870135915080821115610c1557600080fd5b50610c2287828801610b2d565b95989497509550505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610c5257600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610ccd57610ccd610c57565b604052919050565b600082601f830112610ce657600080fd5b8135602067ffffffffffffffff821115610d0257610d02610c57565b8160051b610d11828201610c86565b9283528481018201928281019087851115610d2b57600080fd5b83870192505b84831015610d4a57823582529183019190830190610d31565b979650505050505050565b600082601f830112610d6657600080fd5b813567ffffffffffffffff811115610d8057610d80610c57565b610db160207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610c86565b818152846020838601011115610dc657600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a08688031215610dfb57600080fd5b610e0486610c2e565b9450610e1260208701610c2e565b9350604086013567ffffffffffffffff80821115610e2f57600080fd5b610e3b89838a01610cd5565b94506060880135915080821115610e5157600080fd5b610e5d89838a01610cd5565b93506080880135915080821115610e7357600080fd5b50610e8088828901610d55565b9150509295509295909350565b600080600080600060a08688031215610ea557600080fd5b610eae86610c2e565b9450610ebc60208701610c2e565b93506040860135925060608601359150608086013567ffffffffffffffff811115610ee657600080fd5b610e8088828901610d55565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60005b83811015610f3c578181015183820152602001610f24565b83811115610f4b576000848401525b50505050565b60008351610f63818460208801610f21565b9190910191825250602001919050565b8183823760009101908152919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115610fc557610fc5610f83565b500190565b600082821015610fdc57610fdc610f83565b500390565b60008451610ff3818460208901610f21565b9190910192835250602082015260400191905056fea2646970667358221220dedd25e99d75b07ff647f464a1a26ae96088c3ac4ec03c9b8442b98ef3d10c0c64736f6c63430008090033";
