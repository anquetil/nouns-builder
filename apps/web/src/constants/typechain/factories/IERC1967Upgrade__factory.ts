/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IERC1967Upgrade,
  IERC1967UpgradeInterface,
} from "../IERC1967Upgrade";

const _abi = [
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
];

export class IERC1967Upgrade__factory {
  static readonly abi = _abi;
  static createInterface(): IERC1967UpgradeInterface {
    return new utils.Interface(_abi) as IERC1967UpgradeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IERC1967Upgrade {
    return new Contract(address, _abi, signerOrProvider) as IERC1967Upgrade;
  }
}
