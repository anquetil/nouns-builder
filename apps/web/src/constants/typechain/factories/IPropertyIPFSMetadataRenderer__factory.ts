/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPropertyIPFSMetadataRenderer,
  IPropertyIPFSMetadataRendererInterface,
} from "../IPropertyIPFSMetadataRenderer";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "selectedPropertyId",
        type: "uint256",
      },
    ],
    name: "INVALID_PROPERTY_SELECTED",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "impl",
        type: "address",
      },
    ],
    name: "INVALID_UPGRADE",
    type: "error",
  },
  {
    inputs: [],
    name: "ONE_PROPERTY_AND_ITEM_REQUIRED",
    type: "error",
  },
  {
    inputs: [],
    name: "ONLY_CALL",
    type: "error",
  },
  {
    inputs: [],
    name: "ONLY_DELEGATECALL",
    type: "error",
  },
  {
    inputs: [],
    name: "ONLY_MANAGER",
    type: "error",
  },
  {
    inputs: [],
    name: "ONLY_PROXY",
    type: "error",
  },
  {
    inputs: [],
    name: "ONLY_TOKEN",
    type: "error",
  },
  {
    inputs: [],
    name: "ONLY_UUPS",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "TOKEN_NOT_MINTED",
    type: "error",
  },
  {
    inputs: [],
    name: "TOO_MANY_PROPERTIES",
    type: "error",
  },
  {
    inputs: [],
    name: "UNSUPPORTED_UUID",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "string",
            name: "key",
            type: "string",
          },
          {
            internalType: "string",
            name: "value",
            type: "string",
          },
          {
            internalType: "bool",
            name: "quote",
            type: "bool",
          },
        ],
        indexed: false,
        internalType:
          "struct MetadataRendererTypesV2.AdditionalTokenProperty[]",
        name: "_additionalJsonProperties",
        type: "tuple[]",
      },
    ],
    name: "AdditionalTokenPropertiesSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "prevImage",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newImage",
        type: "string",
      },
    ],
    name: "ContractImageUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "prevDescription",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newDescription",
        type: "string",
      },
    ],
    name: "DescriptionUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "PropertyAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "prevRendererBase",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newRendererBase",
        type: "string",
      },
    ],
    name: "RendererBaseUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "impl",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "lastURI",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newURI",
        type: "string",
      },
    ],
    name: "WebsiteURIUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "names",
        type: "string[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "propertyId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isNewProperty",
            type: "bool",
          },
        ],
        internalType: "struct MetadataRendererTypesV1.ItemParam[]",
        name: "items",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "string",
            name: "baseUri",
            type: "string",
          },
          {
            internalType: "string",
            name: "extension",
            type: "string",
          },
        ],
        internalType: "struct MetadataRendererTypesV1.IPFSGroup",
        name: "ipfsGroup",
        type: "tuple",
      },
    ],
    name: "addProperties",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "contractImage",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getAttributes",
    outputs: [
      {
        internalType: "string",
        name: "resultAttributes",
        type: "string",
      },
      {
        internalType: "string",
        name: "queryString",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "initStrings",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "propertyId",
        type: "uint256",
      },
    ],
    name: "itemsCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "onMinted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
  {
    inputs: [],
    name: "propertiesCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rendererBase",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newContractImage",
        type: "string",
      },
    ],
    name: "updateContractImage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newDescription",
        type: "string",
      },
    ],
    name: "updateDescription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newRendererBase",
        type: "string",
      },
    ],
    name: "updateRendererBase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImpl",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImpl",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class IPropertyIPFSMetadataRenderer__factory {
  static readonly abi = _abi;
  static createInterface(): IPropertyIPFSMetadataRendererInterface {
    return new utils.Interface(_abi) as IPropertyIPFSMetadataRendererInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPropertyIPFSMetadataRenderer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IPropertyIPFSMetadataRenderer;
  }
}
