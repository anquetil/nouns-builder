/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  VersionedContract,
  VersionedContractInterface,
} from "../VersionedContract";

const _abi = [
  {
    inputs: [],
    name: "contractVersion",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export class VersionedContract__factory {
  static readonly abi = _abi;
  static createInterface(): VersionedContractInterface {
    return new utils.Interface(_abi) as VersionedContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VersionedContract {
    return new Contract(address, _abi, signerOrProvider) as VersionedContract;
  }
}
