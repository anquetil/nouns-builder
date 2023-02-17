/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BytesLike,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ERC1967Proxy, ERC1967ProxyInterface } from "../ERC1967Proxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "DELEGATE_CALL_FAILED",
    type: "error",
  },
  {
    inputs: [],
    name: "INVALID_TARGET",
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
    name: "ONLY_UUPS",
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
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040526040516105623803806105628339810160408190526100229161025c565b61002e82826000610035565b5050610346565b61003e8361006b565b60008251118061004b5750805b156100665761006483836100b360201b6100291760201c565b505b505050565b6100748161014a565b6040516001600160a01b03821681527fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b9060200160405180910390a150565b6060823b6100d4576040516337f2022960e01b815260040160405180910390fd5b600080846001600160a01b0316846040516100ef919061032a565b600060405180830381855af49150503d806000811461012a576040519150601f19603f3d011682016040523d82523d6000602084013e61012f565b606091505b50909250905061013f82826101e7565b925050505b92915050565b61015d816101e160201b6100e51760201c565b6101895760405163310365cd60e21b81526001600160a01b038216600482015260240160405180910390fd5b806101c07f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61021f60201b6100eb1760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b3b151590565b606082156101f6575080610144565b8151156102065781518083602001fd5b60405163062536b160e41b815260040160405180910390fd5b90565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561025357818101518382015260200161023b565b50506000910152565b6000806040838503121561026f57600080fd5b82516001600160a01b038116811461028657600080fd5b60208401519092506001600160401b03808211156102a357600080fd5b818501915085601f8301126102b757600080fd5b8151818111156102c9576102c9610222565b604051601f8201601f19908116603f011681019083821181831017156102f1576102f1610222565b8160405282815288602084870101111561030a57600080fd5b61031b836020830160208801610238565b80955050505050509250929050565b6000825161033c818460208701610238565b9190910192915050565b61020d806103556000396000f3fe60806040523661001357610011610017565b005b6100115b6100276100226100ee565b610133565b565b6060823b610063576040517f37f2022900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000808473ffffffffffffffffffffffffffffffffffffffff168460405161008b91906101a8565b600060405180830381855af49150503d80600081146100c6576040519150601f19603f3d011682016040523d82523d6000602084013e6100cb565b606091505b50915091506100da8282610157565b925050505b92915050565b3b151590565b90565b600061012e7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b3660008037600080366000845af43d6000803e808015610152573d6000f35b3d6000fd5b606082156101665750806100df565b8151156101765781518083602001fd5b6040517f62536b1000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000825160005b818110156101c957602081860181015185830152016101af565b50600092019182525091905056fea2646970667358221220dc4d3f0096ef746736792d21828a33955017294e8f127fdabcf6bf06082a501464736f6c63430008100033";

type ERC1967ProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1967ProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1967Proxy__factory extends ContractFactory {
  constructor(...args: ERC1967ProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _logic: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1967Proxy> {
    return super.deploy(
      _logic,
      _data,
      overrides || {}
    ) as Promise<ERC1967Proxy>;
  }
  override getDeployTransaction(
    _logic: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, _data, overrides || {});
  }
  override attach(address: string): ERC1967Proxy {
    return super.attach(address) as ERC1967Proxy;
  }
  override connect(signer: Signer): ERC1967Proxy__factory {
    return super.connect(signer) as ERC1967Proxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1967ProxyInterface {
    return new utils.Interface(_abi) as ERC1967ProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1967Proxy {
    return new Contract(address, _abi, signerOrProvider) as ERC1967Proxy;
  }
}
