/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter } from "ethers";
import { Provider } from "ethers/providers";
import { BigNumber } from "ethers/utils";
import { TransactionOverrides } from ".";

export class ERC1155MetaPackedBalance extends Contract {
  functions: {
    balanceOf(
      _owner: string,
      _id: number | string | BigNumber
    ): Promise<BigNumber>;

    supportsInterface(_interfaceID: string): Promise<boolean>;

    balanceOfBatch(
      _owners: (string)[],
      _ids: (number | string | BigNumber)[]
    ): Promise<(BigNumber)[]>;

    writeValueInBin(
      _binAmount: number | string | BigNumber,
      _index: number | string | BigNumber,
      _amount: number | string | BigNumber
    ): Promise<BigNumber>;

    getIDBinIndex(
      _id: number | string | BigNumber
    ): Promise<{
      bin: BigNumber;
      index: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    isApprovedForAll(_owner: string, _operator: string): Promise<boolean>;

    getValueInBin(
      _binAmount: number | string | BigNumber,
      _index: number | string | BigNumber
    ): Promise<BigNumber>;

    isValidSignature(
      _signerAddress: string,
      _hash: string,
      _data: (string)[],
      _sig: (string)[]
    ): Promise<boolean>;

    getNonce(_signer: string): Promise<BigNumber>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: (number | string | BigNumber)[],
      _amounts: (number | string | BigNumber)[],
      _data: (string)[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: number | string | BigNumber,
      _amount: number | string | BigNumber,
      _data: (string)[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    metaSafeTransferFrom(
      _from: string,
      _to: string,
      _id: number | string | BigNumber,
      _amount: number | string | BigNumber,
      _isGasFee: boolean,
      _data: (string)[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    metaSafeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: (number | string | BigNumber)[],
      _amounts: (number | string | BigNumber)[],
      _isGasFee: boolean,
      _data: (string)[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    metaSetApprovalForAll(
      _owner: string,
      _operator: string,
      _approved: boolean,
      _isGasFee: boolean,
      _data: (string)[],
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };
  filters: {
    TransferSingle(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _id: null,
      _amount: null
    ): EventFilter;

    TransferBatch(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _ids: null,
      _amounts: null
    ): EventFilter;

    ApprovalForAll(
      _owner: string | null,
      _operator: string | null,
      _approved: null
    ): EventFilter;

    URI(_uri: null, _id: number | string | BigNumber | null): EventFilter;
  };
}
