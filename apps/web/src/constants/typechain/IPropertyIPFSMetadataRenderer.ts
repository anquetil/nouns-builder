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

export declare namespace MetadataRendererTypesV2 {
  export type AdditionalTokenPropertyStruct = {
    key: PromiseOrValue<string>;
    value: PromiseOrValue<string>;
    quote: PromiseOrValue<boolean>;
  };

  export type AdditionalTokenPropertyStructOutput = [
    string,
    string,
    boolean
  ] & { key: string; value: string; quote: boolean };
}

export declare namespace MetadataRendererTypesV1 {
  export type ItemParamStruct = {
    propertyId: PromiseOrValue<BigNumberish>;
    name: PromiseOrValue<string>;
    isNewProperty: PromiseOrValue<boolean>;
  };

  export type ItemParamStructOutput = [BigNumber, string, boolean] & {
    propertyId: BigNumber;
    name: string;
    isNewProperty: boolean;
  };

  export type IPFSGroupStruct = {
    baseUri: PromiseOrValue<string>;
    extension: PromiseOrValue<string>;
  };

  export type IPFSGroupStructOutput = [string, string] & {
    baseUri: string;
    extension: string;
  };
}

export interface IPropertyIPFSMetadataRendererInterface
  extends utils.Interface {
  functions: {
    "addProperties(string[],(uint256,string,bool)[],(string,string))": FunctionFragment;
    "contractImage()": FunctionFragment;
    "contractURI()": FunctionFragment;
    "description()": FunctionFragment;
    "getAttributes(uint256)": FunctionFragment;
    "initialize(bytes,address)": FunctionFragment;
    "itemsCount(uint256)": FunctionFragment;
    "onMinted(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "propertiesCount()": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "rendererBase()": FunctionFragment;
    "token()": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
    "updateContractImage(string)": FunctionFragment;
    "updateDescription(string)": FunctionFragment;
    "updateRendererBase(string)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addProperties"
      | "contractImage"
      | "contractURI"
      | "description"
      | "getAttributes"
      | "initialize"
      | "itemsCount"
      | "onMinted"
      | "owner"
      | "propertiesCount"
      | "proxiableUUID"
      | "rendererBase"
      | "token"
      | "tokenURI"
      | "updateContractImage"
      | "updateDescription"
      | "updateRendererBase"
      | "upgradeTo"
      | "upgradeToAndCall"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addProperties",
    values: [
      PromiseOrValue<string>[],
      MetadataRendererTypesV1.ItemParamStruct[],
      MetadataRendererTypesV1.IPFSGroupStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "contractImage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contractURI",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "description",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAttributes",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "itemsCount",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "onMinted",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "propertiesCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rendererBase",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateContractImage",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateDescription",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateRendererBase",
    values: [PromiseOrValue<string>]
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
    functionFragment: "addProperties",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractImage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAttributes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "itemsCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "onMinted", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "propertiesCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rendererBase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateContractImage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateDescription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateRendererBase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;

  events: {
    "AdditionalTokenPropertiesSet(tuple[])": EventFragment;
    "ContractImageUpdated(string,string)": EventFragment;
    "DescriptionUpdated(string,string)": EventFragment;
    "PropertyAdded(uint256,string)": EventFragment;
    "RendererBaseUpdated(string,string)": EventFragment;
    "Upgraded(address)": EventFragment;
    "WebsiteURIUpdated(string,string)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "AdditionalTokenPropertiesSet"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ContractImageUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DescriptionUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PropertyAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RendererBaseUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WebsiteURIUpdated"): EventFragment;
}

export interface AdditionalTokenPropertiesSetEventObject {
  _additionalJsonProperties: MetadataRendererTypesV2.AdditionalTokenPropertyStructOutput[];
}
export type AdditionalTokenPropertiesSetEvent = TypedEvent<
  [MetadataRendererTypesV2.AdditionalTokenPropertyStructOutput[]],
  AdditionalTokenPropertiesSetEventObject
>;

export type AdditionalTokenPropertiesSetEventFilter =
  TypedEventFilter<AdditionalTokenPropertiesSetEvent>;

export interface ContractImageUpdatedEventObject {
  prevImage: string;
  newImage: string;
}
export type ContractImageUpdatedEvent = TypedEvent<
  [string, string],
  ContractImageUpdatedEventObject
>;

export type ContractImageUpdatedEventFilter =
  TypedEventFilter<ContractImageUpdatedEvent>;

export interface DescriptionUpdatedEventObject {
  prevDescription: string;
  newDescription: string;
}
export type DescriptionUpdatedEvent = TypedEvent<
  [string, string],
  DescriptionUpdatedEventObject
>;

export type DescriptionUpdatedEventFilter =
  TypedEventFilter<DescriptionUpdatedEvent>;

export interface PropertyAddedEventObject {
  id: BigNumber;
  name: string;
}
export type PropertyAddedEvent = TypedEvent<
  [BigNumber, string],
  PropertyAddedEventObject
>;

export type PropertyAddedEventFilter = TypedEventFilter<PropertyAddedEvent>;

export interface RendererBaseUpdatedEventObject {
  prevRendererBase: string;
  newRendererBase: string;
}
export type RendererBaseUpdatedEvent = TypedEvent<
  [string, string],
  RendererBaseUpdatedEventObject
>;

export type RendererBaseUpdatedEventFilter =
  TypedEventFilter<RendererBaseUpdatedEvent>;

export interface UpgradedEventObject {
  impl: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface WebsiteURIUpdatedEventObject {
  lastURI: string;
  newURI: string;
}
export type WebsiteURIUpdatedEvent = TypedEvent<
  [string, string],
  WebsiteURIUpdatedEventObject
>;

export type WebsiteURIUpdatedEventFilter =
  TypedEventFilter<WebsiteURIUpdatedEvent>;

export interface IPropertyIPFSMetadataRenderer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPropertyIPFSMetadataRendererInterface;

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
    addProperties(
      names: PromiseOrValue<string>[],
      items: MetadataRendererTypesV1.ItemParamStruct[],
      ipfsGroup: MetadataRendererTypesV1.IPFSGroupStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    contractImage(overrides?: CallOverrides): Promise<[string]>;

    contractURI(overrides?: CallOverrides): Promise<[string]>;

    description(overrides?: CallOverrides): Promise<[string]>;

    getAttributes(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string] & { resultAttributes: string; queryString: string }
    >;

    initialize(
      initStrings: PromiseOrValue<BytesLike>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    itemsCount(
      propertyId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    onMinted(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    propertiesCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    rendererBase(overrides?: CallOverrides): Promise<[string]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    tokenURI(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    updateContractImage(
      newContractImage: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateDescription(
      newDescription: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateRendererBase(
      newRendererBase: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeTo(
      newImpl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImpl: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addProperties(
    names: PromiseOrValue<string>[],
    items: MetadataRendererTypesV1.ItemParamStruct[],
    ipfsGroup: MetadataRendererTypesV1.IPFSGroupStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  contractImage(overrides?: CallOverrides): Promise<string>;

  contractURI(overrides?: CallOverrides): Promise<string>;

  description(overrides?: CallOverrides): Promise<string>;

  getAttributes(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, string] & { resultAttributes: string; queryString: string }
  >;

  initialize(
    initStrings: PromiseOrValue<BytesLike>,
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  itemsCount(
    propertyId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  onMinted(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  propertiesCount(overrides?: CallOverrides): Promise<BigNumber>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  rendererBase(overrides?: CallOverrides): Promise<string>;

  token(overrides?: CallOverrides): Promise<string>;

  tokenURI(
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  updateContractImage(
    newContractImage: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateDescription(
    newDescription: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateRendererBase(
    newRendererBase: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeTo(
    newImpl: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImpl: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addProperties(
      names: PromiseOrValue<string>[],
      items: MetadataRendererTypesV1.ItemParamStruct[],
      ipfsGroup: MetadataRendererTypesV1.IPFSGroupStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    contractImage(overrides?: CallOverrides): Promise<string>;

    contractURI(overrides?: CallOverrides): Promise<string>;

    description(overrides?: CallOverrides): Promise<string>;

    getAttributes(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, string] & { resultAttributes: string; queryString: string }
    >;

    initialize(
      initStrings: PromiseOrValue<BytesLike>,
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    itemsCount(
      propertyId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onMinted(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    propertiesCount(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    rendererBase(overrides?: CallOverrides): Promise<string>;

    token(overrides?: CallOverrides): Promise<string>;

    tokenURI(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    updateContractImage(
      newContractImage: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateDescription(
      newDescription: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateRendererBase(
      newRendererBase: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeTo(
      newImpl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImpl: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdditionalTokenPropertiesSet(tuple[])"(
      _additionalJsonProperties?: null
    ): AdditionalTokenPropertiesSetEventFilter;
    AdditionalTokenPropertiesSet(
      _additionalJsonProperties?: null
    ): AdditionalTokenPropertiesSetEventFilter;

    "ContractImageUpdated(string,string)"(
      prevImage?: null,
      newImage?: null
    ): ContractImageUpdatedEventFilter;
    ContractImageUpdated(
      prevImage?: null,
      newImage?: null
    ): ContractImageUpdatedEventFilter;

    "DescriptionUpdated(string,string)"(
      prevDescription?: null,
      newDescription?: null
    ): DescriptionUpdatedEventFilter;
    DescriptionUpdated(
      prevDescription?: null,
      newDescription?: null
    ): DescriptionUpdatedEventFilter;

    "PropertyAdded(uint256,string)"(
      id?: null,
      name?: null
    ): PropertyAddedEventFilter;
    PropertyAdded(id?: null, name?: null): PropertyAddedEventFilter;

    "RendererBaseUpdated(string,string)"(
      prevRendererBase?: null,
      newRendererBase?: null
    ): RendererBaseUpdatedEventFilter;
    RendererBaseUpdated(
      prevRendererBase?: null,
      newRendererBase?: null
    ): RendererBaseUpdatedEventFilter;

    "Upgraded(address)"(impl?: null): UpgradedEventFilter;
    Upgraded(impl?: null): UpgradedEventFilter;

    "WebsiteURIUpdated(string,string)"(
      lastURI?: null,
      newURI?: null
    ): WebsiteURIUpdatedEventFilter;
    WebsiteURIUpdated(
      lastURI?: null,
      newURI?: null
    ): WebsiteURIUpdatedEventFilter;
  };

  estimateGas: {
    addProperties(
      names: PromiseOrValue<string>[],
      items: MetadataRendererTypesV1.ItemParamStruct[],
      ipfsGroup: MetadataRendererTypesV1.IPFSGroupStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    contractImage(overrides?: CallOverrides): Promise<BigNumber>;

    contractURI(overrides?: CallOverrides): Promise<BigNumber>;

    description(overrides?: CallOverrides): Promise<BigNumber>;

    getAttributes(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      initStrings: PromiseOrValue<BytesLike>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    itemsCount(
      propertyId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onMinted(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    propertiesCount(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    rendererBase(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    tokenURI(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateContractImage(
      newContractImage: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateDescription(
      newDescription: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateRendererBase(
      newRendererBase: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeTo(
      newImpl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImpl: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addProperties(
      names: PromiseOrValue<string>[],
      items: MetadataRendererTypesV1.ItemParamStruct[],
      ipfsGroup: MetadataRendererTypesV1.IPFSGroupStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    contractImage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    contractURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    description(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAttributes(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      initStrings: PromiseOrValue<BytesLike>,
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    itemsCount(
      propertyId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onMinted(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    propertiesCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rendererBase(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenURI(
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateContractImage(
      newContractImage: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateDescription(
      newDescription: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateRendererBase(
      newRendererBase: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImpl: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImpl: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
