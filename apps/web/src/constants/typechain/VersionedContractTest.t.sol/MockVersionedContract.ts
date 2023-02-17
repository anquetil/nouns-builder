/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface MockVersionedContractInterface extends utils.Interface {
  functions: {
    "contractVersion()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "contractVersion"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "contractVersion",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "contractVersion",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MockVersionedContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockVersionedContractInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    contractVersion(overrides?: CallOverrides): Promise<[string]>;
  };

  contractVersion(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    contractVersion(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    contractVersion(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    contractVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
