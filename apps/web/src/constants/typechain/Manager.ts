/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace IManager {
  export type FounderParamsStruct = {
    wallet: PromiseOrValue<string>;
    ownershipPct: PromiseOrValue<BigNumberish>;
    vestExpiry: PromiseOrValue<BigNumberish>;
  };

  export type FounderParamsStructOutput = [string, BigNumber, BigNumber] & {
    wallet: string;
    ownershipPct: BigNumber;
    vestExpiry: BigNumber;
  };

  export type TokenParamsStruct = { initStrings: PromiseOrValue<BytesLike> };

  export type TokenParamsStructOutput = [string] & { initStrings: string };

  export type AuctionParamsStruct = {
    reservePrice: PromiseOrValue<BigNumberish>;
    duration: PromiseOrValue<BigNumberish>;
  };

  export type AuctionParamsStructOutput = [BigNumber, BigNumber] & {
    reservePrice: BigNumber;
    duration: BigNumber;
  };

  export type GovParamsStruct = {
    timelockDelay: PromiseOrValue<BigNumberish>;
    votingDelay: PromiseOrValue<BigNumberish>;
    votingPeriod: PromiseOrValue<BigNumberish>;
    proposalThresholdBps: PromiseOrValue<BigNumberish>;
    quorumThresholdBps: PromiseOrValue<BigNumberish>;
    vetoer: PromiseOrValue<string>;
  };

  export type GovParamsStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
  ] & {
    timelockDelay: BigNumber;
    votingDelay: BigNumber;
    votingPeriod: BigNumber;
    proposalThresholdBps: BigNumber;
    quorumThresholdBps: BigNumber;
    vetoer: string;
  };

  export type DAOVersionInfoStruct = {
    token: PromiseOrValue<string>;
    metadata: PromiseOrValue<string>;
    auction: PromiseOrValue<string>;
    treasury: PromiseOrValue<string>;
    governor: PromiseOrValue<string>;
  };

  export type DAOVersionInfoStructOutput = [
    string,
    string,
    string,
    string,
    string
  ] & {
    token: string;
    metadata: string;
    auction: string;
    treasury: string;
    governor: string;
  };
}

export interface ManagerInterface extends utils.Interface {
  functions: {
    "acceptOwnership()": FunctionFragment;
    "auctionImpl()": FunctionFragment;
    "cancelOwnershipTransfer()": FunctionFragment;
    "contractVersion()": FunctionFragment;
    "deploy((address,uint256,uint256)[],(bytes),(uint256,uint256),(uint256,uint256,uint256,uint256,uint256,address))": FunctionFragment;
    "getAddresses(address)": FunctionFragment;
    "getDAOVersions(address)": FunctionFragment;
    "getLatestVersions()": FunctionFragment;
    "governorImpl()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "isRegisteredUpgrade(address,address)": FunctionFragment;
    "metadataImpl()": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingOwner()": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "registerUpgrade(address,address)": FunctionFragment;
    "removeUpgrade(address,address)": FunctionFragment;
    "safeTransferOwnership(address)": FunctionFragment;
    "tokenImpl()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "treasuryImpl()": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptOwnership"
      | "auctionImpl"
      | "cancelOwnershipTransfer"
      | "contractVersion"
      | "deploy"
      | "getAddresses"
      | "getDAOVersions"
      | "getLatestVersions"
      | "governorImpl"
      | "initialize"
      | "isRegisteredUpgrade"
      | "metadataImpl"
      | "owner"
      | "pendingOwner"
      | "proxiableUUID"
      | "registerUpgrade"
      | "removeUpgrade"
      | "safeTransferOwnership"
      | "tokenImpl"
      | "transferOwnership"
      | "treasuryImpl"
      | "upgradeTo"
      | "upgradeToAndCall"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "auctionImpl",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cancelOwnershipTransfer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contractVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deploy",
    values: [
      IManager.FounderParamsStruct[],
      IManager.TokenParamsStruct,
      IManager.AuctionParamsStruct,
      IManager.GovParamsStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getAddresses",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDAOVersions",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getLatestVersions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "governorImpl",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isRegisteredUpgrade",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "metadataImpl",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "registerUpgrade",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeUpgrade",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "tokenImpl", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "treasuryImpl",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "auctionImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelOwnershipTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDAOVersions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLatestVersions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "governorImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isRegisteredUpgrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "metadataImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerUpgrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeUpgrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenImpl", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "treasuryImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;

  events: {
    "DAODeployed(address,address,address,address,address)": EventFragment;
    "Initialized(uint256)": EventFragment;
    "OwnerCanceled(address,address)": EventFragment;
    "OwnerPending(address,address)": EventFragment;
    "OwnerUpdated(address,address)": EventFragment;
    "UpgradeRegistered(address,address)": EventFragment;
    "UpgradeRemoved(address,address)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DAODeployed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerCanceled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerPending"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpgradeRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpgradeRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export interface DAODeployedEventObject {
  token: string;
  metadata: string;
  auction: string;
  treasury: string;
  governor: string;
}
export type DAODeployedEvent = TypedEvent<
  [string, string, string, string, string],
  DAODeployedEventObject
>;

export type DAODeployedEventFilter = TypedEventFilter<DAODeployedEvent>;

export interface InitializedEventObject {
  version: BigNumber;
}
export type InitializedEvent = TypedEvent<[BigNumber], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnerCanceledEventObject {
  owner: string;
  canceledOwner: string;
}
export type OwnerCanceledEvent = TypedEvent<
  [string, string],
  OwnerCanceledEventObject
>;

export type OwnerCanceledEventFilter = TypedEventFilter<OwnerCanceledEvent>;

export interface OwnerPendingEventObject {
  owner: string;
  pendingOwner: string;
}
export type OwnerPendingEvent = TypedEvent<
  [string, string],
  OwnerPendingEventObject
>;

export type OwnerPendingEventFilter = TypedEventFilter<OwnerPendingEvent>;

export interface OwnerUpdatedEventObject {
  prevOwner: string;
  newOwner: string;
}
export type OwnerUpdatedEvent = TypedEvent<
  [string, string],
  OwnerUpdatedEventObject
>;

export type OwnerUpdatedEventFilter = TypedEventFilter<OwnerUpdatedEvent>;

export interface UpgradeRegisteredEventObject {
  baseImpl: string;
  upgradeImpl: string;
}
export type UpgradeRegisteredEvent = TypedEvent<
  [string, string],
  UpgradeRegisteredEventObject
>;

export type UpgradeRegisteredEventFilter =
  TypedEventFilter<UpgradeRegisteredEvent>;

export interface UpgradeRemovedEventObject {
  baseImpl: string;
  upgradeImpl: string;
}
export type UpgradeRemovedEvent = TypedEvent<
  [string, string],
  UpgradeRemovedEventObject
>;

export type UpgradeRemovedEventFilter = TypedEventFilter<UpgradeRemovedEvent>;

export interface UpgradedEventObject {
  impl: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface Manager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ManagerInterface;

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
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    auctionImpl(overrides?: CallOverrides): Promise<[string]>;

    cancelOwnershipTransfer(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    contractVersion(overrides?: CallOverrides): Promise<[string]>;

    deploy(
      _founderParams: IManager.FounderParamsStruct[],
      _tokenParams: IManager.TokenParamsStruct,
      _auctionParams: IManager.AuctionParamsStruct,
      _govParams: IManager.GovParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAddresses(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string] & {
        metadata: string;
        auction: string;
        treasury: string;
        governor: string;
      }
    >;

    getDAOVersions(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[IManager.DAOVersionInfoStructOutput]>;

    getLatestVersions(
      overrides?: CallOverrides
    ): Promise<[IManager.DAOVersionInfoStructOutput]>;

    governorImpl(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isRegisteredUpgrade(
      _baseImpl: PromiseOrValue<string>,
      _upgradeImpl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    metadataImpl(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    registerUpgrade(
      _baseImpl: PromiseOrValue<string>,
      _upgradeImpl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeUpgrade(
      _baseImpl: PromiseOrValue<string>,
      _upgradeImpl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    safeTransferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tokenImpl(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    treasuryImpl(overrides?: CallOverrides): Promise<[string]>;

    upgradeTo(
      _newImpl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      _newImpl: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  auctionImpl(overrides?: CallOverrides): Promise<string>;

  cancelOwnershipTransfer(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  contractVersion(overrides?: CallOverrides): Promise<string>;

  deploy(
    _founderParams: IManager.FounderParamsStruct[],
    _tokenParams: IManager.TokenParamsStruct,
    _auctionParams: IManager.AuctionParamsStruct,
    _govParams: IManager.GovParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAddresses(
    _token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string] & {
      metadata: string;
      auction: string;
      treasury: string;
      governor: string;
    }
  >;

  getDAOVersions(
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<IManager.DAOVersionInfoStructOutput>;

  getLatestVersions(
    overrides?: CallOverrides
  ): Promise<IManager.DAOVersionInfoStructOutput>;

  governorImpl(overrides?: CallOverrides): Promise<string>;

  initialize(
    _newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isRegisteredUpgrade(
    _baseImpl: PromiseOrValue<string>,
    _upgradeImpl: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  metadataImpl(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  registerUpgrade(
    _baseImpl: PromiseOrValue<string>,
    _upgradeImpl: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeUpgrade(
    _baseImpl: PromiseOrValue<string>,
    _upgradeImpl: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  safeTransferOwnership(
    _newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tokenImpl(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    _newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  treasuryImpl(overrides?: CallOverrides): Promise<string>;

  upgradeTo(
    _newImpl: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    _newImpl: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    auctionImpl(overrides?: CallOverrides): Promise<string>;

    cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;

    contractVersion(overrides?: CallOverrides): Promise<string>;

    deploy(
      _founderParams: IManager.FounderParamsStruct[],
      _tokenParams: IManager.TokenParamsStruct,
      _auctionParams: IManager.AuctionParamsStruct,
      _govParams: IManager.GovParamsStruct,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, string] & {
        token: string;
        metadata: string;
        auction: string;
        treasury: string;
        governor: string;
      }
    >;

    getAddresses(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string] & {
        metadata: string;
        auction: string;
        treasury: string;
        governor: string;
      }
    >;

    getDAOVersions(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<IManager.DAOVersionInfoStructOutput>;

    getLatestVersions(
      overrides?: CallOverrides
    ): Promise<IManager.DAOVersionInfoStructOutput>;

    governorImpl(overrides?: CallOverrides): Promise<string>;

    initialize(
      _newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    isRegisteredUpgrade(
      _baseImpl: PromiseOrValue<string>,
      _upgradeImpl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    metadataImpl(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    registerUpgrade(
      _baseImpl: PromiseOrValue<string>,
      _upgradeImpl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeUpgrade(
      _baseImpl: PromiseOrValue<string>,
      _upgradeImpl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    safeTransferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenImpl(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    treasuryImpl(overrides?: CallOverrides): Promise<string>;

    upgradeTo(
      _newImpl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      _newImpl: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DAODeployed(address,address,address,address,address)"(
      token?: null,
      metadata?: null,
      auction?: null,
      treasury?: null,
      governor?: null
    ): DAODeployedEventFilter;
    DAODeployed(
      token?: null,
      metadata?: null,
      auction?: null,
      treasury?: null,
      governor?: null
    ): DAODeployedEventFilter;

    "Initialized(uint256)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnerCanceled(address,address)"(
      owner?: PromiseOrValue<string> | null,
      canceledOwner?: PromiseOrValue<string> | null
    ): OwnerCanceledEventFilter;
    OwnerCanceled(
      owner?: PromiseOrValue<string> | null,
      canceledOwner?: PromiseOrValue<string> | null
    ): OwnerCanceledEventFilter;

    "OwnerPending(address,address)"(
      owner?: PromiseOrValue<string> | null,
      pendingOwner?: PromiseOrValue<string> | null
    ): OwnerPendingEventFilter;
    OwnerPending(
      owner?: PromiseOrValue<string> | null,
      pendingOwner?: PromiseOrValue<string> | null
    ): OwnerPendingEventFilter;

    "OwnerUpdated(address,address)"(
      prevOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnerUpdatedEventFilter;
    OwnerUpdated(
      prevOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnerUpdatedEventFilter;

    "UpgradeRegistered(address,address)"(
      baseImpl?: null,
      upgradeImpl?: null
    ): UpgradeRegisteredEventFilter;
    UpgradeRegistered(
      baseImpl?: null,
      upgradeImpl?: null
    ): UpgradeRegisteredEventFilter;

    "UpgradeRemoved(address,address)"(
      baseImpl?: null,
      upgradeImpl?: null
    ): UpgradeRemovedEventFilter;
    UpgradeRemoved(
      baseImpl?: null,
      upgradeImpl?: null
    ): UpgradeRemovedEventFilter;

    "Upgraded(address)"(impl?: null): UpgradedEventFilter;
    Upgraded(impl?: null): UpgradedEventFilter;
  };

  estimateGas: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    auctionImpl(overrides?: CallOverrides): Promise<BigNumber>;

    cancelOwnershipTransfer(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    contractVersion(overrides?: CallOverrides): Promise<BigNumber>;

    deploy(
      _founderParams: IManager.FounderParamsStruct[],
      _tokenParams: IManager.TokenParamsStruct,
      _auctionParams: IManager.AuctionParamsStruct,
      _govParams: IManager.GovParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAddresses(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDAOVersions(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLatestVersions(overrides?: CallOverrides): Promise<BigNumber>;

    governorImpl(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isRegisteredUpgrade(
      _baseImpl: PromiseOrValue<string>,
      _upgradeImpl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    metadataImpl(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    registerUpgrade(
      _baseImpl: PromiseOrValue<string>,
      _upgradeImpl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeUpgrade(
      _baseImpl: PromiseOrValue<string>,
      _upgradeImpl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    safeTransferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tokenImpl(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    treasuryImpl(overrides?: CallOverrides): Promise<BigNumber>;

    upgradeTo(
      _newImpl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      _newImpl: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    auctionImpl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cancelOwnershipTransfer(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    contractVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deploy(
      _founderParams: IManager.FounderParamsStruct[],
      _tokenParams: IManager.TokenParamsStruct,
      _auctionParams: IManager.AuctionParamsStruct,
      _govParams: IManager.GovParamsStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAddresses(
      _token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDAOVersions(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLatestVersions(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governorImpl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isRegisteredUpgrade(
      _baseImpl: PromiseOrValue<string>,
      _upgradeImpl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    metadataImpl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    registerUpgrade(
      _baseImpl: PromiseOrValue<string>,
      _upgradeImpl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeUpgrade(
      _baseImpl: PromiseOrValue<string>,
      _upgradeImpl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    safeTransferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tokenImpl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      _newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    treasuryImpl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    upgradeTo(
      _newImpl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      _newImpl: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
