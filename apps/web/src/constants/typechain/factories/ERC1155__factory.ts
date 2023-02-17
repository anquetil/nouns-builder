/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ERC1155, ERC1155Interface } from "../ERC1155";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
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
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001d5238038062001d5283398101604081905262000034916200006e565b6200003f8162000046565b506200029e565b6002620000548282620001d2565b5050565b634e487b7160e01b600052604160045260246000fd5b600060208083850312156200008257600080fd5b82516001600160401b03808211156200009a57600080fd5b818501915085601f830112620000af57600080fd5b815181811115620000c457620000c462000058565b604051601f8201601f19908116603f01168101908382118183101715620000ef57620000ef62000058565b8160405282815288868487010111156200010857600080fd5b600093505b828410156200012c57848401860151818501870152928501926200010d565b600086848301015280965050505050505092915050565b600181811c908216806200015857607f821691505b6020821081036200017957634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001cd57600081815260208120601f850160051c81016020861015620001a85750805b601f850160051c820191505b81811015620001c957828155600101620001b4565b5050505b505050565b81516001600160401b03811115620001ee57620001ee62000058565b6200020681620001ff845462000143565b846200017f565b602080601f8311600181146200023e5760008415620002255750858301515b600019600386901b1c1916600185901b178555620001c9565b600085815260208120601f198616915b828110156200026f578886015182559484019460019091019084016200024e565b50858210156200028e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611aa480620002ae6000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80634e1273f41161005b5780634e1273f41461010a578063a22cb4651461012a578063e985e9c51461013d578063f242432a1461018657600080fd5b8062fdd58e1461008c57806301ffc9a7146100b25780630e89341c146100d55780632eb2c2d6146100f5575b600080fd5b61009f61009a366004611261565b610199565b6040519081526020015b60405180910390f35b6100c56100c03660046112bc565b610279565b60405190151581526020016100a9565b6100e86100e33660046112e0565b61035c565b6040516100a9919061135d565b610108610103366004611511565b6103f0565b005b61011d6101183660046115bb565b6104b9565b6040516100a991906116c1565b6101086101383660046116d4565b610611565b6100c561014b366004611710565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205460ff1690565b610108610194366004611743565b610620565b600073ffffffffffffffffffffffffffffffffffffffff8316610243576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a2061646472657373207a65726f206973206e6f742061207660448201527f616c6964206f776e65720000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b5060008181526020818152604080832073ffffffffffffffffffffffffffffffffffffffff861684529091529020545b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a2600000000000000000000000000000000000000000000000000000000148061030c57507fffffffff0000000000000000000000000000000000000000000000000000000082167f0e89341c00000000000000000000000000000000000000000000000000000000145b8061027357507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff00000000000000000000000000000000000000000000000000000000831614610273565b60606002805461036b906117a8565b80601f0160208091040260200160405190810160405280929190818152602001828054610397906117a8565b80156103e45780601f106103b9576101008083540402835291602001916103e4565b820191906000526020600020905b8154815290600101906020018083116103c757829003601f168201915b50505050509050919050565b73ffffffffffffffffffffffffffffffffffffffff85163314806104195750610419853361014b565b6104a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206e6f7220617070726f7665640000000000000000000000000000000000606482015260840161023a565b6104b285858585856106e2565b5050505050565b6060815183511461054c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d617463680000000000000000000000000000000000000000000000606482015260840161023a565b6000835167ffffffffffffffff81111561056857610568611370565b604051908082528060200260200182016040528015610591578160200160208202803683370190505b50905060005b8451811015610609576105dc8582815181106105b5576105b56117fb565b60200260200101518583815181106105cf576105cf6117fb565b6020026020010151610199565b8282815181106105ee576105ee6117fb565b602090810291909101015261060281611859565b9050610597565b509392505050565b61061c338383610a1c565b5050565b73ffffffffffffffffffffffffffffffffffffffff85163314806106495750610649853361014b565b6106d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f455243313135353a2063616c6c6572206973206e6f7420746f6b656e206f776e60448201527f6572206e6f7220617070726f7665640000000000000000000000000000000000606482015260840161023a565b6104b28585858585610b6f565b8151835114610773576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d61746368000000000000000000000000000000000000000000000000606482015260840161023a565b73ffffffffffffffffffffffffffffffffffffffff8416610816576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161023a565b3360005b8451811015610987576000858281518110610837576108376117fb565b602002602001015190506000858381518110610855576108556117fb565b6020908102919091018101516000848152808352604080822073ffffffffffffffffffffffffffffffffffffffff8e168352909352919091205490915081811015610922576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e7366657200000000000000000000000000000000000000000000606482015260840161023a565b60008381526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8e8116855292528083208585039055908b1682528120805484929061096c908490611891565b925050819055505050508061098090611859565b905061081a565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb87876040516109fe9291906118a4565b60405180910390a4610a14818787878787610dad565b505050505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610ad7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c2073746174757360448201527f20666f722073656c660000000000000000000000000000000000000000000000606482015260840161023a565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8416610c12576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161023a565b336000610c1e85611040565b90506000610c2b85611040565b905060008681526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8c16845290915290205485811015610ceb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201527f72207472616e7366657200000000000000000000000000000000000000000000606482015260840161023a565b60008781526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8d8116855292528083208985039055908a16825281208054889290610d35908490611891565b9091555050604080518881526020810188905273ffffffffffffffffffffffffffffffffffffffff808b16928c821692918816917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610da2848a8a8a8a8a61108b565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84163b15610a14576040517fbc197c8100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063bc197c8190610e2490899089908890889088906004016118d2565b6020604051808303816000875af1925050508015610e7d575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252610e7a9181019061193d565b60015b610f6657610e8961195a565b806308c379a003610edc5750610e9d611976565b80610ea85750610ede565b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161023a919061135d565b505b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e204552433131353560448201527f526563656976657220696d706c656d656e746572000000000000000000000000606482015260840161023a565b7fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c810000000000000000000000000000000000000000000000000000000014611037576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e73000000000000000000000000000000000000000000000000606482015260840161023a565b50505050505050565b6040805160018082528183019092526060916000919060208083019080368337019050509050828160008151811061107a5761107a6117fb565b602090810291909101015292915050565b73ffffffffffffffffffffffffffffffffffffffff84163b15610a14576040517ff23a6e6100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063f23a6e61906111029089908990889088908890600401611a1e565b6020604051808303816000875af192505050801561115b575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526111589181019061193d565b60015b61116757610e8961195a565b7fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e610000000000000000000000000000000000000000000000000000000014611037576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a6563746560448201527f6420746f6b656e73000000000000000000000000000000000000000000000000606482015260840161023a565b803573ffffffffffffffffffffffffffffffffffffffff8116811461125c57600080fd5b919050565b6000806040838503121561127457600080fd5b61127d83611238565b946020939093013593505050565b7fffffffff00000000000000000000000000000000000000000000000000000000811681146112b957600080fd5b50565b6000602082840312156112ce57600080fd5b81356112d98161128b565b9392505050565b6000602082840312156112f257600080fd5b5035919050565b6000815180845260005b8181101561131f57602081850181015186830182015201611303565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b6020815260006112d960208301846112f9565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116810181811067ffffffffffffffff821117156113e3576113e3611370565b6040525050565b600067ffffffffffffffff82111561140457611404611370565b5060051b60200190565b600082601f83011261141f57600080fd5b8135602061142c826113ea565b604051611439828261139f565b83815260059390931b850182019282810191508684111561145957600080fd5b8286015b84811015611474578035835291830191830161145d565b509695505050505050565b600082601f83011261149057600080fd5b813567ffffffffffffffff8111156114aa576114aa611370565b6040516114df60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f850116018261139f565b8181528460208386010111156114f457600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a0868803121561152957600080fd5b61153286611238565b945061154060208701611238565b9350604086013567ffffffffffffffff8082111561155d57600080fd5b61156989838a0161140e565b9450606088013591508082111561157f57600080fd5b61158b89838a0161140e565b935060808801359150808211156115a157600080fd5b506115ae8882890161147f565b9150509295509295909350565b600080604083850312156115ce57600080fd5b823567ffffffffffffffff808211156115e657600080fd5b818501915085601f8301126115fa57600080fd5b81356020611607826113ea565b604051611614828261139f565b83815260059390931b850182019282810191508984111561163457600080fd5b948201945b838610156116595761164a86611238565b82529482019490820190611639565b9650508601359250508082111561166f57600080fd5b5061167c8582860161140e565b9150509250929050565b600081518084526020808501945080840160005b838110156116b65781518752958201959082019060010161169a565b509495945050505050565b6020815260006112d96020830184611686565b600080604083850312156116e757600080fd5b6116f083611238565b91506020830135801515811461170557600080fd5b809150509250929050565b6000806040838503121561172357600080fd5b61172c83611238565b915061173a60208401611238565b90509250929050565b600080600080600060a0868803121561175b57600080fd5b61176486611238565b945061177260208701611238565b93506040860135925060608601359150608086013567ffffffffffffffff81111561179c57600080fd5b6115ae8882890161147f565b600181811c908216806117bc57607f821691505b6020821081036117f5577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361188a5761188a61182a565b5060010190565b808201808211156102735761027361182a565b6040815260006118b76040830185611686565b82810360208401526118c98185611686565b95945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525060a0604083015261190b60a0830186611686565b828103606084015261191d8186611686565b9050828103608084015261193181856112f9565b98975050505050505050565b60006020828403121561194f57600080fd5b81516112d98161128b565b600060033d11156119735760046000803e5060005160e01c5b90565b600060443d10156119845790565b6040517ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc803d016004833e81513d67ffffffffffffffff81602484011181841117156119d257505050505090565b82850191508151818111156119ea5750505050505090565b843d8701016020828501011115611a045750505050505090565b611a136020828601018761139f565b509095945050505050565b600073ffffffffffffffffffffffffffffffffffffffff808816835280871660208401525084604083015283606083015260a06080830152611a6360a08301846112f9565b97965050505050505056fea2646970667358221220f6ccdf3e2cbb806932afce288d30304b17f2187ab060fb7ad7410f5f3c6810a164736f6c63430008100033";

type ERC1155ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1155ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1155__factory extends ContractFactory {
  constructor(...args: ERC1155ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    uri_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1155> {
    return super.deploy(uri_, overrides || {}) as Promise<ERC1155>;
  }
  override getDeployTransaction(
    uri_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(uri_, overrides || {});
  }
  override attach(address: string): ERC1155 {
    return super.attach(address) as ERC1155;
  }
  override connect(signer: Signer): ERC1155__factory {
    return super.connect(signer) as ERC1155__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155Interface {
    return new utils.Interface(_abi) as ERC1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155 {
    return new Contract(address, _abi, signerOrProvider) as ERC1155;
  }
}
