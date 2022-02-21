/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface SignatureValidatorInterface extends ethers.utils.Interface {
  functions: {
    "isValidSignature(address,bytes32,bytes,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "isValidSignature",
    values: [string, BytesLike, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "isValidSignature",
    data: BytesLike
  ): Result;

  events: {};
}

export class SignatureValidator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: SignatureValidatorInterface;

  functions: {
    isValidSignature(
      _signerAddress: string,
      _hash: BytesLike,
      _data: BytesLike,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isValid: boolean }>;

    "isValidSignature(address,bytes32,bytes,bytes)"(
      _signerAddress: string,
      _hash: BytesLike,
      _data: BytesLike,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isValid: boolean }>;
  };

  isValidSignature(
    _signerAddress: string,
    _hash: BytesLike,
    _data: BytesLike,
    _sig: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isValidSignature(address,bytes32,bytes,bytes)"(
    _signerAddress: string,
    _hash: BytesLike,
    _data: BytesLike,
    _sig: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    isValidSignature(
      _signerAddress: string,
      _hash: BytesLike,
      _data: BytesLike,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isValidSignature(address,bytes32,bytes,bytes)"(
      _signerAddress: string,
      _hash: BytesLike,
      _data: BytesLike,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    isValidSignature(
      _signerAddress: string,
      _hash: BytesLike,
      _data: BytesLike,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isValidSignature(address,bytes32,bytes,bytes)"(
      _signerAddress: string,
      _hash: BytesLike,
      _data: BytesLike,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    isValidSignature(
      _signerAddress: string,
      _hash: BytesLike,
      _data: BytesLike,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isValidSignature(address,bytes32,bytes,bytes)"(
      _signerAddress: string,
      _hash: BytesLike,
      _data: BytesLike,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
