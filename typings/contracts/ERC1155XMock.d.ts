/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter } from "ethers";
import { Provider } from "ethers/providers";
import { BigNumber } from "ethers/utils";

export class ERC1155XMock extends Contract {
  functions: {
    balanceOf(_address: string, _id: number | string): Promise<BigNumber>;

    supportsInterface(_interfaceID: string): Promise<boolean>;

    getNonce(_signer: string): Promise<BigNumber>;

    recoverHashSigner(
      _hash: string,
      _r: string,
      _s: string,
      _v: number | string
    ): Promise<string>;

    writeValueInBin(
      _binValue: number | string,
      _index: number | string,
      _amount: number | string
    ): Promise<BigNumber>;

    recoverApprovalSigner(
      _operator: string,
      _approved: boolean,
      _nonce: number | string,
      _sig: { v: number | string; r: string; s: string; sigPrefix: string }
    ): Promise<string>;

    recoverTransferFromSigner(
      _from: string,
      _to: string,
      _id: number | string,
      _amount: number | string,
      _data: (string)[],
      _nonce: number | string,
      _sig: { v: number | string; r: string; s: string; sigPrefix: string }
    ): Promise<string>;

    getIDBinIndex(
      _id: number | string
    ): Promise<{
      bin: BigNumber;
      index: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    isApprovedForAll(_owner: string, _operator: string): Promise<boolean>;

    getValueInBin(
      _binValue: number | string,
      _index: number | string
    ): Promise<BigNumber>;

    batchMint(
      _to: string,
      _ids: (number | string)[],
      _amounts: (number | string)[]
    ): Promise<ContractTransaction>;

    mint(
      _to: string,
      _id: number | string,
      _amount: number | string
    ): Promise<ContractTransaction>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: (number | string)[],
      _amounts: (number | string)[],
      _data: (string)[]
    ): Promise<ContractTransaction>;

    renounceOwnership(): Promise<ContractTransaction>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean
    ): Promise<ContractTransaction>;

    initialize(sender: string): Promise<ContractTransaction>;

    sigSetApprovalForAll(
      _owner: string,
      _operator: string,
      _approved: boolean,
      _sig: { v: number | string; r: string; s: string; sigPrefix: string }
    ): Promise<ContractTransaction>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: number | string,
      _amount: number | string,
      _data: (string)[]
    ): Promise<ContractTransaction>;

    transferOwnership(newOwner: string): Promise<ContractTransaction>;

    sigSafeTransferFrom(
      _from: string,
      _to: string,
      _id: number | string,
      _amount: number | string,
      _data: (string)[],
      _sig: { v: number | string; r: string; s: string; sigPrefix: string }
    ): Promise<ContractTransaction>;

    mockMint(
      _address: string,
      _type: number | string,
      _value: number | string
    ): Promise<ContractTransaction>;

    owner(): Promise<string>;
    isOwner(): Promise<boolean>;
  };
  filters: {
    OwnershipRenounced(previousOwner: string | null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    Transfer(
      operator: null,
      from: null,
      to: null,
      ids: null,
      amounts: null
    ): EventFilter;

    ApprovalForAll(
      _owner: string | null,
      _operator: string | null,
      _approved: null
    ): EventFilter;

    Transfer(from: null, to: null, tokenType: null, amount: null): EventFilter;

    URI(_id: number | string | null, _value: null): EventFilter;

    Name(_id: number | string | null, _value: null): EventFilter;
  };
}