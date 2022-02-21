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
    ERC1155MintBurnPackedBalance__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    ERC1155MintBurnPackedBalance__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
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
        stateMutability: "pure",
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
        stateMutability: "pure",
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
var _bytecode = "0x608060405234801561001057600080fd5b50611fb8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a25760003560e01c8063a22cb46511610076578063e985e9c51161005b578063e985e9c514610160578063eaec5f81146101a9578063f242432a146101bc57600080fd5b8063a22cb46514610125578063db90e83c1461013857600080fd5b8062fdd58e146100a757806301ffc9a7146100cd5780632eb2c2d6146100f05780634e1273f414610105575b600080fd5b6100ba6100b536600461167b565b6101cf565b6040519081526020015b60405180910390f35b6100e06100db3660046116d6565b610226565b60405190151581526020016100c4565b6101036100fe366004611895565b6102c4565b005b61011861011336600461193f565b61046d565b6040516100c49190611a3a565b610103610133366004611a4d565b610767565b61014b610146366004611a89565b6107fe565b604080519283526020830191909152016100c4565b6100e061016e366004611aa2565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205460ff1690565b6100ba6101b7366004611ad5565b610838565b6101036101ca366004611af7565b610864565b60008060006101dd846107fe565b73ffffffffffffffffffffffffffffffffffffffff8716600090815260208181526040808320858452909152902054919350915061021b9082610838565b925050505b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a2600000000000000000000000000000000000000000000000000000000141561027a57506001919050565b7f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610220565b3373ffffffffffffffffffffffffffffffffffffffff86161480610318575073ffffffffffffffffffffffffffffffffffffffff8516600090815260016020908152604080832033845290915290205460ff165b6103a9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603c60248201527f455243313135355061636b656442616c616e636523736166654261746368547260448201527f616e7366657246726f6d3a20494e56414c49445f4f50455241544f520000000060648201526084015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661044c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603d60248201527f455243313135355061636b656442616c616e636523736166654261746368547260448201527f616e7366657246726f6d3a20494e56414c49445f524543495049454e5400000060648201526084016103a0565b61045885858585610a01565b610466858585855a86610e64565b5050505050565b81518151606091908114610503576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603960248201527f455243313135355061636b656442616c616e63652362616c616e63654f66426160448201527f7463683a20494e56414c49445f41525241595f4c454e4754480000000000000060648201526084016103a0565b6000806105298560008151811061051c5761051c611b5c565b60200260200101516107fe565b9150915060008060008860008151811061054557610545611b5c565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000848152602001908152602001600020549050600083905060008567ffffffffffffffff8111156105bb576105bb6116fa565b6040519080825280602002602001820160405280156105e4578160200160208202803683370190505b5090506105f18385610838565b8160008151811061060457610604611b5c565b602090810291909101015260015b8681101561075a5761062f89828151811061051c5761051c611b5c565b909650945082861415806106ad575089818151811061065057610650611b5c565b602002602001015173ffffffffffffffffffffffffffffffffffffffff168a60018361067c9190611bba565b8151811061068c5761068c611b5c565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614155b15610721576000808b83815181106106c7576106c7611b5c565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008781526020019081526020016000205493508592505b61072b8486610838565b82828151811061073d5761073d611b5c565b60209081029190910101528061075281611bd1565b915050610612565b5098975050505050505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b60008061080e6010610100611c39565b6108189084611c39565b91506108276010610100611c39565b6108319084611c4d565b9050915091565b600080610849600162010000611bba565b90506000610858846010611c61565b9490941c169392505050565b3373ffffffffffffffffffffffffffffffffffffffff861614806108b8575073ffffffffffffffffffffffffffffffffffffffff8516600090815260016020908152604080832033845290915290205460ff165b610944576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603760248201527f455243313135355061636b656442616c616e636523736166655472616e73666560448201527f7246726f6d3a20494e56414c49445f4f50455241544f5200000000000000000060648201526084016103a0565b73ffffffffffffffffffffffffffffffffffffffff84166109e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f455243313135355061636b656442616c616e636523736166655472616e73666560448201527f7246726f6d3a20494e56414c49445f524543495049454e54000000000000000060648201526084016103a0565b6109f38585858561101b565b610466858585855a86611093565b815181518114610ab9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604260248201527f455243313135355061636b656442616c616e6365235f7361666542617463685460448201527f72616e7366657246726f6d3a20494e56414c49445f4152524159535f4c454e4760648201527f5448000000000000000000000000000000000000000000000000000000000000608482015260a4016103a0565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614158015610af55750600081115b15610cf557600080610b138560008151811061051c5761051c611b5c565b73ffffffffffffffffffffffffffffffffffffffff8916600090815260208181526040808320858452909152812054875193955091935091610b719190849088908590610b6257610b62611b5c565b60200260200101516001611240565b73ffffffffffffffffffffffffffffffffffffffff881660009081526020818152604080832087845290915281205487519293509091610bcd9190859089908590610bbe57610bbe611b5c565b60200260200101516000611240565b90508360015b86811015610ca357610bf089828151811061051c5761051c611b5c565b9096509450818614610c5f5773ffffffffffffffffffffffffffffffffffffffff8b811660009081526020818152604080832086845280835281842098909855928d16825281815282822094825284815282822095909555878152948452808520549290935291909220549084905b610c7684868a8481518110610b6257610b62611b5c565b9350610c8f83868a8481518110610bbe57610bbe611b5c565b925080610c9b81611bd1565b915050610bd3565b505073ffffffffffffffffffffffffffffffffffffffff808a16600090815260208181526040808320888452825280832095909555918a16815280825283812095815294905292209190915550610ddf565b60005b81811015610ddd57828181518110610d1257610d12611b5c565b6020026020010151610d3d87868481518110610d3057610d30611b5c565b60200260200101516101cf565b1015610dcb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f455243313135355061636b656442616c616e6365235f7361666542617463685460448201527f72616e7366657246726f6d3a20554e444552464c4f570000000000000000000060648201526084016103a0565b80610dd581611bd1565b915050610cf8565b505b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051610e55929190611c9e565b60405180910390a45050505050565b73ffffffffffffffffffffffffffffffffffffffff85163b156110135760008573ffffffffffffffffffffffffffffffffffffffff1663bc197c8184338a8989886040518763ffffffff1660e01b8152600401610ec5959493929190611d37565b602060405180830381600088803b158015610edf57600080fd5b5087f1158015610ef3573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610f189190611da2565b90507fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c810000000000000000000000000000000000000000000000000000000014611011576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604c60248201527f455243313135355061636b656442616c616e6365235f63616c6c6f6e4552433160448201527f313535426174636852656365697665643a20494e56414c49445f4f4e5f52454360648201527f454956455f4d4553534147450000000000000000000000000000000000000000608482015260a4016103a0565b505b505050505050565b61102884838360016115cb565b61103583838360006115cb565b604080518381526020810183905273ffffffffffffffffffffffffffffffffffffffff808616929087169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a450505050565b73ffffffffffffffffffffffffffffffffffffffff85163b156110135760008573ffffffffffffffffffffffffffffffffffffffff1663f23a6e6184338a8989886040518763ffffffff1660e01b81526004016110f4959493929190611dbf565b602060405180830381600088803b15801561110e57600080fd5b5087f1158015611122573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906111479190611da2565b90507fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e610000000000000000000000000000000000000000000000000000000014611011576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604760248201527f455243313135355061636b656442616c616e6365235f63616c6c6f6e4552433160448201527f31353552656365697665643a20494e56414c49445f4f4e5f524543454956455f60648201527f4d45535341474500000000000000000000000000000000000000000000000000608482015260a4016103a0565b60008061124e856010611c61565b90506000611260600162010000611bba565b9050600084600181111561127657611276611e0f565b14156113c65761128885831b88611e3e565b92508683101561131a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f455243313135355061636b656442616c616e6365235f7669657755706461746560448201527f42696e56616c75653a204f564552464c4f57000000000000000000000000000060648201526084016103a0565b61132660106002611f76565b6113348689851c8416611e3e565b106113c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f455243313135355061636b656442616c616e6365235f7669657755706461746560448201527f42696e56616c75653a204f564552464c4f57000000000000000000000000000060648201526084016103a0565b6115c1565b60018460018111156113da576113da611e0f565b1415611513576113ec85831b88611bba565b92508683111561147e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603360248201527f455243313135355061636b656442616c616e6365235f7669657755706461746560448201527f42696e56616c75653a20554e444552464c4f570000000000000000000000000060648201526084016103a0565b84818389901c1610156113c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603360248201527f455243313135355061636b656442616c616e6365235f7669657755706461746560448201527f42696e56616c75653a20554e444552464c4f570000000000000000000000000060648201526084016103a0565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152604560248201527f455243313135355061636b656442616c616e6365235f7669657755706461746560448201527f42696e56616c75653a20494e56414c49445f42494e5f57524954455f4f50455260648201527f4154494f4e000000000000000000000000000000000000000000000000000000608482015260a4016103a0565b5050949350505050565b6000806115d7856107fe565b73ffffffffffffffffffffffffffffffffffffffff8816600090815260208181526040808320858452909152902054919350915061161790828686611240565b73ffffffffffffffffffffffffffffffffffffffff909616600090815260208181526040808320948352939052919091209490945550505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461167657600080fd5b919050565b6000806040838503121561168e57600080fd5b61169783611652565b946020939093013593505050565b7fffffffff00000000000000000000000000000000000000000000000000000000811681146116d357600080fd5b50565b6000602082840312156116e857600080fd5b81356116f3816116a5565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611770576117706116fa565b604052919050565b600067ffffffffffffffff821115611792576117926116fa565b5060051b60200190565b600082601f8301126117ad57600080fd5b813560206117c26117bd83611778565b611729565b82815260059290921b840181019181810190868411156117e157600080fd5b8286015b848110156117fc57803583529183019183016117e5565b509695505050505050565b600082601f83011261181857600080fd5b813567ffffffffffffffff811115611832576118326116fa565b61186360207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611729565b81815284602083860101111561187857600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a086880312156118ad57600080fd5b6118b686611652565b94506118c460208701611652565b9350604086013567ffffffffffffffff808211156118e157600080fd5b6118ed89838a0161179c565b9450606088013591508082111561190357600080fd5b61190f89838a0161179c565b9350608088013591508082111561192557600080fd5b5061193288828901611807565b9150509295509295909350565b6000806040838503121561195257600080fd5b823567ffffffffffffffff8082111561196a57600080fd5b818501915085601f83011261197e57600080fd5b8135602061198e6117bd83611778565b82815260059290921b840181019181810190898411156119ad57600080fd5b948201945b838610156119d2576119c386611652565b825294820194908201906119b2565b965050860135925050808211156119e857600080fd5b506119f58582860161179c565b9150509250929050565b600081518084526020808501945080840160005b83811015611a2f57815187529582019590820190600101611a13565b509495945050505050565b6020815260006116f360208301846119ff565b60008060408385031215611a6057600080fd5b611a6983611652565b915060208301358015158114611a7e57600080fd5b809150509250929050565b600060208284031215611a9b57600080fd5b5035919050565b60008060408385031215611ab557600080fd5b611abe83611652565b9150611acc60208401611652565b90509250929050565b60008060408385031215611ae857600080fd5b50508035926020909101359150565b600080600080600060a08688031215611b0f57600080fd5b611b1886611652565b9450611b2660208701611652565b93506040860135925060608601359150608086013567ffffffffffffffff811115611b5057600080fd5b61193288828901611807565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082821015611bcc57611bcc611b8b565b500390565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611c0357611c03611b8b565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082611c4857611c48611c0a565b500490565b600082611c5c57611c5c611c0a565b500690565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611c9957611c99611b8b565b500290565b604081526000611cb160408301856119ff565b8281036020840152611cc381856119ff565b95945050505050565b6000815180845260005b81811015611cf257602081850181015186830182015201611cd6565b81811115611d04576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525060a06040830152611d7060a08301866119ff565b8281036060840152611d8281866119ff565b90508281036080840152611d968185611ccc565b98975050505050505050565b600060208284031215611db457600080fd5b81516116f3816116a5565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525084604083015283606083015260a06080830152611e0460a0830184611ccc565b979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60008219821115611e5157611e51611b8b565b500190565b600181815b80851115611eaf57817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115611e9557611e95611b8b565b80851615611ea257918102915b93841c9390800290611e5b565b509250929050565b600082611ec657506001610220565b81611ed357506000610220565b8160018114611ee95760028114611ef357611f0f565b6001915050610220565b60ff841115611f0457611f04611b8b565b50506001821b610220565b5060208310610133831016604e8410600b8410161715611f32575081810a610220565b611f3c8383611e56565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115611f6e57611f6e611b8b565b029392505050565b60006116f38383611eb756fea264697066735822122054cc9886f6cbe768e4a57162c3bd7e90490d6c7841cf773b1b1165b8ae3b712a64736f6c63430008090033";
