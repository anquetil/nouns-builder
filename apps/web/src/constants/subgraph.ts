import { CHAIN_ID } from 'src/typings'

export const PUBLIC_SUBGRAPH_URL = {
  [CHAIN_ID.ETHEREUM]:
    'https://api.thegraph.com/subgraphs/name/neokry/nouns-builder-mainnet',
  [CHAIN_ID.OPTIMISM]:
    'https://api.goldsky.com/api/public/project_clkk1ucdyf6ak38svcatie9tf/subgraphs/nouns-builder-optimism-mainnet/1.0.0/gn',
  [CHAIN_ID.GOERLI]:
    'https://api.thegraph.com/subgraphs/name/neokry/nouns-builder-goerli',
  [CHAIN_ID.OPTIMISM_GOERLI]:
    'https://api.thegraph.com/subgraphs/name/neokry/nouns-builder-optimism-goerli',
  [CHAIN_ID.BASE]:
    'https://api.goldsky.com/api/public/project_clkk1ucdyf6ak38svcatie9tf/subgraphs/nouns-builder-base-mainnet/stable/gn',
  [CHAIN_ID.BASE_GOERLI]:
    'https://api.studio.thegraph.com/query/49279/nouns-builder-base-goerli/version/latest',
  [CHAIN_ID.ZORA]:
    'https://api.goldsky.com/api/public/project_clkk1ucdyf6ak38svcatie9tf/subgraphs/nouns-builder-zora-mainnet/stable/gn',
  [CHAIN_ID.ZORA_GOERLI]:
    'https://api.goldsky.com/api/public/project_clkk1ucdyf6ak38svcatie9tf/subgraphs/nouns-builder-zora-testnet/stable/gn',
  [CHAIN_ID.FOUNDRY]:
    'https://api.thegraph.com/subgraphs/name/neokry/nouns-builder-mainnet',
}
