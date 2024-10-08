import { TokenSymbol } from "../symbols/tokenBOB";
import { ChainId } from "../chainId";

export interface TokenInfo {
    chains: number[];
    name: string;
    symbol: TokenSymbol,
    icon: string;
    contracts: Partial<Record<ChainId, { address: string; decimal: number }>>;
}

const baseURL = 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/'

export const tokens: TokenInfo[] = [
    {
        name: "USD Coin (BOB)",
        symbol: TokenSymbol.USDCEBOB,
        chains: [ChainId.BOB],
        icon: baseURL + 'usdc.png',
        contracts: {
            [ChainId.BOB]: {
                address: '0xe75D0fB2C24A55cA1e3F96781a2bCC7bdba058F0',
                decimal: 6,
            },
        },
    },
    {
        name: "tBTC V2",
        symbol: TokenSymbol.TBTCBOB,
        chains: [ChainId.BOB],
        icon: baseURL + 'tbtc.png',
        contracts: {
            [ChainId.BOB]: {
                address: '0xBBa2eF945D523C4e2608C9E1214C2Cc64D4fc2e2',
                decimal: 18,
            },
        },
    },
    {
        name: "teleBTC",
        symbol: TokenSymbol.TELEBTCBOB,
        chains: [ChainId.BOB],
        icon: baseURL + 'telebtc.png',
        contracts: {
            [ChainId.BOB]: {
                address: '0x0670beedc28e9bf0748cb254abd946c87f033d9d',
                decimal: 8,
            },
        },
    },
    {
        name: "Rocket Pool ETH",
        symbol: TokenSymbol.RETHBOB,
        chains: [ChainId.BOB],
        icon: baseURL + 'reth.png',
        contracts: {
            [ChainId.BOB]: {
                address: '0xB5686c4f60904Ec2BDA6277d6FE1F7cAa8D1b41a',
                decimal: 18,
            },
        },
    },
    {
        name: "Stake Stone Ether",
        symbol: TokenSymbol.STONEBOB,
        chains: [ChainId.BOB],
        icon: baseURL + 'stone.png',
        contracts: {
            [ChainId.BOB]: {
                address: '0x96147A9Ae9a42d7Da551fD2322ca15B71032F342',
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped liquid staked Ether 2.0",
        symbol: TokenSymbol.WSTETHBOB,
        chains: [ChainId.BOB],
        icon: baseURL + 'wsteth.png',
        contracts: {
            [ChainId.BOB]: {
                address: '0x85008aE6198BC91aC0735CB5497CF125ddAAc528',
                decimal: 18,
            },
        },
    },
    {
        name: "SlerfBOB Token",
        symbol: TokenSymbol.SLERFBOB,
        chains: [ChainId.BOB],
        icon: baseURL + 'slerf.png',
        contracts: {
            [ChainId.BOB]: {
                address: '0x6db2721586abcc682b44c5425b97f3c27ffb5b27',
                decimal: 18,
            },
        },
    },
]
