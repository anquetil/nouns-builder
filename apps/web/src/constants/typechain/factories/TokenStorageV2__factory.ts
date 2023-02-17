/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  TokenStorageV2,
  TokenStorageV2Interface,
} from "../TokenStorageV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "minter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060d28061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80633dd08c3814602d575b600080fd5b604d60383660046061565b60006020819052908152604090205460ff1681565b604051901515815260200160405180910390f35b600060208284031215607257600080fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114609557600080fd5b939250505056fea26469706673582212201ad5988acd5c4d93450f1acce074ed58d1c973a3319b5bc68f26356bc598e82c64736f6c63430008100033";

type TokenStorageV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenStorageV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenStorageV2__factory extends ContractFactory {
  constructor(...args: TokenStorageV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenStorageV2> {
    return super.deploy(overrides || {}) as Promise<TokenStorageV2>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TokenStorageV2 {
    return super.attach(address) as TokenStorageV2;
  }
  override connect(signer: Signer): TokenStorageV2__factory {
    return super.connect(signer) as TokenStorageV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenStorageV2Interface {
    return new utils.Interface(_abi) as TokenStorageV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenStorageV2 {
    return new Contract(address, _abi, signerOrProvider) as TokenStorageV2;
  }
}
