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
exports.ERC1155MintBurnPackedBalance__factory = void 0;
var ethers_1 = require("ethers");
var ERC1155MintBurnPackedBalance__factory = /** @class */ (function (_super) {
    __extends(ERC1155MintBurnPackedBalance__factory, _super);
    function ERC1155MintBurnPackedBalance__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    ERC1155MintBurnPackedBalance__factory.prototype.deploy = function (_idsBitsSize, overrides) {
        return _super.prototype.deploy.call(this, _idsBitsSize, overrides || {});
    };
    ERC1155MintBurnPackedBalance__factory.prototype.getDeployTransaction = function (_idsBitsSize, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _idsBitsSize, overrides || {});
    };
    ERC1155MintBurnPackedBalance__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ERC1155MintBurnPackedBalance__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ERC1155MintBurnPackedBalance__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return ERC1155MintBurnPackedBalance__factory;
}(ethers_1.ContractFactory));
exports.ERC1155MintBurnPackedBalance__factory = ERC1155MintBurnPackedBalance__factory;
var _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_idsBitsSize",
                type: "uint256"
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_owner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "_operator",
                type: "address"
            },
            {
                indexed: false,
                internalType: "bool",
                name: "_approved",
                type: "bool"
            },
        ],
        name: "ApprovalForAll",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_operator",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "_from",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "_to",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "_ids",
                type: "uint256[]"
            },
            {
                indexed: false,
                internalType: "uint256[]",
                name: "_amounts",
                type: "uint256[]"
            },
        ],
        name: "TransferBatch",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_operator",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "_from",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "_to",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_id",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            },
        ],
        name: "TransferSingle",
        type: "event"
    },
    {
        inputs: [],
        name: "IDS_BITS_SIZE",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256"
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_owners",
                type: "address[]"
            },
            {
                internalType: "uint256[]",
                name: "_ids",
                type: "uint256[]"
            },
        ],
        name: "balanceOfBatch",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256"
            },
        ],
        name: "getIDBinIndex",
        outputs: [
            {
                internalType: "uint256",
                name: "bin",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "index",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_binValues",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_index",
                type: "uint256"
            },
        ],
        name: "getValueInBin",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_owner",
                type: "address"
            },
            {
                internalType: "address",
                name: "_operator",
                type: "address"
            },
        ],
        name: "isApprovedForAll",
        outputs: [
            {
                internalType: "bool",
                name: "isOperator",
                type: "bool"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_from",
                type: "address"
            },
            {
                internalType: "address",
                name: "_to",
                type: "address"
            },
            {
                internalType: "uint256[]",
                name: "_ids",
                type: "uint256[]"
            },
            {
                internalType: "uint256[]",
                name: "_amounts",
                type: "uint256[]"
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            },
        ],
        name: "safeBatchTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_from",
                type: "address"
            },
            {
                internalType: "address",
                name: "_to",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_id",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            },
            {
                internalType: "bytes",
                name: "_data",
                type: "bytes"
            },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_operator",
                type: "address"
            },
            {
                internalType: "bool",
                name: "_approved",
                type: "bool"
            },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "_interfaceID",
                type: "bytes4"
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "pure",
        type: "function"
    },
];
var _bytecode = "0x60c060405234801561001057600080fd5b50604051611e1a380380611e1a8339818101604052602081101561003357600080fd5b505180610100811080156100505750806101008161004d57fe5b06155b6100a5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526037815260200180611de36037913960400191505060405180910390fd5b608081905280610100816100b557fe5b0460a052505060805160a051611cf16100f260003980610b3e5280610b6a525080610b9b5280610bfc52806116b552806117735250611cf16000f3fe608060405234801561001057600080fd5b50600436106100bd5760003560e01c8063db90e83c11610076578063e985e9c51161005b578063e985e9c514610526578063eaec5f8114610561578063f242432a14610584576100bd565b8063db90e83c146104e8578063ddcc74ab1461051e576100bd565b80632eb2c2d6116100a75780632eb2c2d6146101605780634e1273f414610336578063a22cb465146104ad576100bd565b8062fdd58e146100c257806301ffc9a71461010d575b600080fd5b6100fb600480360360408110156100d857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561065c565b60408051918252519081900360200190f35b61014c6004803603602081101561012357600080fd5b50357fffffffff00000000000000000000000000000000000000000000000000000000166106b1565b604080519115158252519081900360200190f35b610334600480360360a081101561017657600080fd5b73ffffffffffffffffffffffffffffffffffffffff82358116926020810135909116918101906060810160408201356401000000008111156101b757600080fd5b8201836020820111156101c957600080fd5b803590602001918460208302840111640100000000831117156101eb57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561023b57600080fd5b82018360208201111561024d57600080fd5b8035906020019184602083028401116401000000008311171561026f57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092959493602081019350359150506401000000008111156102bf57600080fd5b8201836020820111156102d157600080fd5b803590602001918460018302840111640100000000831117156102f357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610716945050505050565b005b61045d6004803603604081101561034c57600080fd5b81019060208101813564010000000081111561036757600080fd5b82018360208201111561037957600080fd5b8035906020019184602083028401116401000000008311171561039b57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092959493602081019350359150506401000000008111156103eb57600080fd5b8201836020820111156103fd57600080fd5b8035906020019184602083028401116401000000008311171561041f57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610821945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b83811015610499578181015183820152602001610481565b505050509050019250505060405180910390f35b610334600480360360408110156104c357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001351515610aa0565b610505600480360360208110156104fe57600080fd5b5035610b39565b6040805192835260208301919091528051918290030190f35b6100fb610b99565b61014c6004803603604081101561053c57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610bbd565b6100fb6004803603604081101561057757600080fd5b5080359060200135610bf8565b610334600480360360a081101561059a57600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169160408201359160608101359181019060a0810160808201356401000000008111156105e757600080fd5b8201836020820111156105f957600080fd5b8035906020019184600183028401116401000000008311171561061b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610c4a945050505050565b600080600061066a84610b39565b73ffffffffffffffffffffffffffffffffffffffff871660009081526020818152604080832085845290915290205491935091506106a89082610bf8565b95945050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a2600000000000000000000000000000000000000000000000000000000141561070557506001610711565b61070e82610d4e565b90505b919050565b3373ffffffffffffffffffffffffffffffffffffffff8616148061073f575061073f8533610bbd565b610794576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c815260200180611b54603c913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416610800576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d815260200180611a1f603d913960400191505060405180910390fd5b61080c85858585610d98565b61081a858585855a866111a5565b5050505050565b81518151606091908114610880576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260398152602001806119e66039913960400191505060405180910390fd5b6000806108a08560008151811061089357fe5b6020026020010151610b39565b915091506000806000886000815181106108b657fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000848152602001908152602001600020549050600083905060608567ffffffffffffffff8111801561092a57600080fd5b50604051908082528060200260200182016040528015610954578160200160208202803683370190505b5090506109618385610bf8565b8160008151811061096e57fe5b602090810291909101015260015b86811015610a935761099389828151811061089357fe5b909650945082861415806109fc57508981815181106109ae57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff168a60018303815181106109db57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614155b15610a6a576000808b8381518110610a1057fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008781526020019081526020016000205493508592505b610a748486610bf8565b828281518110610a8057fe5b602090810291909101015260010161097c565b5098975050505050505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b6000807f00000000000000000000000000000000000000000000000000000000000000008381610b6557fe5b0491507f00000000000000000000000000000000000000000000000000000000000000008381610b9157fe5b069050915091565b7f000000000000000000000000000000000000000000000000000000000000000081565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205460ff1690565b60017f000000000000000000000000000000000000000000000000000000000000000090811b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0191029190911c1690565b3373ffffffffffffffffffffffffffffffffffffffff86161480610c735750610c738533610bbd565b610cc8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526037815260200180611a8f6037913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416610d34576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180611c0d6038913960400191505060405180910390fd5b610d408585858561141c565b61081a858585855a866114c0565b7fffffffff0000000000000000000000000000000000000000000000000000000081167f01ffc9a70000000000000000000000000000000000000000000000000000000014919050565b815181518114610df3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526042815260200180611ac66042913960600191505060405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614158015610e2f5750600081115b1561100157600080610e478560008151811061089357fe5b73ffffffffffffffffffffffffffffffffffffffff8916600090815260208181526040808320858452909152812054875193955091935091610e9f9190849088908590610e9057fe5b602002602001015160016116b1565b73ffffffffffffffffffffffffffffffffffffffff881660009081526020818152604080832087845290915281205487519293509091610ef59190859089908590610ee657fe5b602002602001015160006116b1565b90508360015b86811015610faf57610f1289828151811061089357fe5b9096509450818614610f815773ffffffffffffffffffffffffffffffffffffffff8b811660009081526020818152604080832086845280835281842098909855928d16825281815282822094825284815282822095909555878152948452808520549290935291909220549084905b610f9284868a8481518110610e9057fe5b9350610fa583868a8481518110610ee657fe5b9250600101610efb565b505073ffffffffffffffffffffffffffffffffffffffff808a16600090815260208181526040808320888452825280832095909555918a1681528082528381209581529490529220919091555061109e565b60005b8181101561109c5782818151811061101857fe5b602002602001015161103d8786848151811061103057fe5b602002602001015161065c565b1015611094576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526036815260200180611b906036913960400191505060405180910390fd5b600101611004565b505b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561114a578181015183820152602001611132565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015611189578181015183820152602001611171565b5050505090500194505050505060405180910390a45050505050565b6111c48573ffffffffffffffffffffffffffffffffffffffff16611924565b156114145760008573ffffffffffffffffffffffffffffffffffffffff1663bc197c8184338a8989886040518763ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b8381101561127c578181015183820152602001611264565b50505050905001848103835286818151815260200191508051906020019060200280838360005b838110156112bb5781810151838201526020016112a3565b50505050905001848103825285818151815260200191508051906020019080838360005b838110156112f75781810151838201526020016112df565b50505050905090810190601f1680156113245780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600088803b15801561134957600080fd5b5087f115801561135d573d6000803e3d6000fd5b50505050506040513d602081101561137457600080fd5b505190507fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c810000000000000000000000000000000000000000000000000000000014611412576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604c815260200180611b08604c913960600191505060405180910390fd5b505b505050505050565b611429848383600161195e565b611436838383600061195e565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628585604051808381526020018281526020019250505060405180910390a450505050565b6114df8573ffffffffffffffffffffffffffffffffffffffff16611924565b156114145760008573ffffffffffffffffffffffffffffffffffffffff1663f23a6e6184338a8989886040518763ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611598578181015183820152602001611580565b50505050905090810190601f1680156115c55780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600088803b1580156115e857600080fd5b5087f11580156115fc573d6000803e3d6000fd5b50505050506040513d602081101561161357600080fd5b505190507fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e610000000000000000000000000000000000000000000000000000000014611412576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526047815260200180611bc66047913960600191505060405180910390fd5b60007f0000000000000000000000000000000000000000000000000000000000000000848102906001901b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018284600181111561170b57fe5b14156117f75784821b8701925086831015611771576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180611c8a6032913960400191505060405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000060020a87831c82168601106117f2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180611c8a6032913960400191505060405180910390fd5b61191a565b600184600181111561180557fe5b14156118c95784821b870392508683111561186b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526033815260200180611a5c6033913960400191505060405180910390fd5b84818389901c1610156117f2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526033815260200180611a5c6033913960400191505060405180910390fd5b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526045815260200180611c456045913960600191505060405180910390fd5b5050949350505050565b6000813f801580159061195757507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708114155b9392505050565b60008061196a85610b39565b73ffffffffffffffffffffffffffffffffffffffff881660009081526020818152604080832085845290915290205491935091506119aa908286866116b1565b73ffffffffffffffffffffffffffffffffffffffff90961660009081526020818152604080832094835293905291909120949094555050505056fe455243313135355061636b656442616c616e63652362616c616e63654f6642617463683a20494e56414c49445f41525241595f4c454e475448455243313135355061636b656442616c616e6365237361666542617463685472616e7366657246726f6d3a20494e56414c49445f524543495049454e54455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a20554e444552464c4f57455243313135355061636b656442616c616e636523736166655472616e7366657246726f6d3a20494e56414c49445f4f50455241544f52455243313135355061636b656442616c616e6365235f7361666542617463685472616e7366657246726f6d3a20494e56414c49445f4152524159535f4c454e475448455243313135355061636b656442616c616e6365235f63616c6c6f6e45524331313535426174636852656365697665643a20494e56414c49445f4f4e5f524543454956455f4d455353414745455243313135355061636b656442616c616e6365237361666542617463685472616e7366657246726f6d3a20494e56414c49445f4f50455241544f52455243313135355061636b656442616c616e6365235f7361666542617463685472616e7366657246726f6d3a20554e444552464c4f57455243313135355061636b656442616c616e6365235f63616c6c6f6e4552433131353552656365697665643a20494e56414c49445f4f4e5f524543454956455f4d455353414745455243313135355061636b656442616c616e636523736166655472616e7366657246726f6d3a20494e56414c49445f524543495049454e54455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a20494e56414c49445f42494e5f57524954455f4f5045524154494f4e455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a204f564552464c4f57a264697066735822122024d596a506a0fa20fb9dbabc6455c7aad0aef6bfa1553bbb3a8b6aa09f7d6af664736f6c63430007040033455243313135355061636b656442616c616e636523636f6e7374727563746f723a20496e76616c6964204944535f424954535f53495a45";
