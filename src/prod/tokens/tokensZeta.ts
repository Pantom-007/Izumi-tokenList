import { TokenSymbol } from "../symbols/tokenZeta";
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
        name: "Zeta Token",
        symbol: TokenSymbol.ZETAZeta,
        chains: [ChainId.Zeta],
        icon: baseURL + 'zeta.png',
        contracts: {
            [ChainId.Zeta]: {
                address: '0x5F0b1a82749cb4E2278EC87F8BF6B618dC71a8bf',
                decimal: 18, //wzeta
            },
        },
    },
    {
        name: "Wrapped ZETA",
        symbol: TokenSymbol.WZETAZeta,
        chains: [ChainId.Zeta],
        icon: baseURL + 'zeta.png',
        contracts: {
            [ChainId.Zeta]: {
                address: '0x5F0b1a82749cb4E2278EC87F8BF6B618dC71a8bf',
                decimal: 18, 
            },
        },
    },
    {
        name: "ZRC20 ETH-eth_mainnet",
        symbol: TokenSymbol.ETHETHZeta,
        chains: [ChainId.Zeta],
        icon: baseURL + 'eth.png',
        contracts: {
            [ChainId.Zeta]: {
                address: '0xd97B1de3619ed2c6BEb3860147E30cA8A7dC9891',
                decimal: 18, 
            },
        },
    },
    {
        name: "ZRC20 BNB-bsc_mainnet",
        symbol: TokenSymbol.BNBBSCZeta,
        chains: [ChainId.Zeta],
        icon: baseURL + 'bnb.png',
        contracts: {
            [ChainId.Zeta]: {
                address: '0x48f80608B672DC30DC7e3dbBd0343c5F02C738Eb',
                decimal: 18, 
            },
        },
    },
    {
        name: "ZRC20 BTC-btc_mainnet",
        symbol: TokenSymbol.BTCBTCZeta,
        chains: [ChainId.Zeta],
        icon: baseURL + 'btc.png',
        contracts: {
            [ChainId.Zeta]: {
                address: '0x13A0c5930C028511Dc02665E7285134B6d11A5f4',
                decimal: 8, 
            },
        },
    },
    {
        name: "ZRC20 USDT-bsc_mainnet",
        symbol: TokenSymbol.USDTBSCZeta,
        chains: [ChainId.Zeta],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.Zeta]: {
                address: '0x91d4F0D54090Df2D81e834c3c8CE71C6c865e79F',
                decimal: 18, 
            },
        },
    },
    {
        name: "ZRC20 USDT-eth_mainnet",
        symbol: TokenSymbol.USDTETHZeta,
        chains: [ChainId.Zeta],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.Zeta]: {
                address: '0x7c8dDa80bbBE1254a7aACf3219EBe1481c6E01d7',
                decimal: 6, 
            },
        },
    },
    {
        name: "ZRC20 USDC-bsc_mainnet",
        symbol: TokenSymbol.USDCBSCZeta,
        chains: [ChainId.Zeta],
        icon: baseURL + 'usdc.png',
        contracts: {
            [ChainId.Zeta]: {
                address: '0x05BA149A7bd6dC1F937fA9046A9e05C05f3b18b0',
                decimal: 18, 
            },
        },
    },
    {
        name: "ZRC20 USDC-eth_mainnet",
        symbol: TokenSymbol.USDCETHZeta,
        chains: [ChainId.Zeta],
        icon: baseURL + 'usdc.png',
        contracts: {
            [ChainId.Zeta]: {
                address: '0x0cbe0dF132a6c6B4a2974Fa1b7Fb953CF0Cc798a',
                decimal: 6, 
            },
        },
    },
    {
        name: "Puffer Vault",
        symbol: TokenSymbol.PUFETHZeta,
        chains: [ChainId.Zeta],
        icon: baseURL + 'pufeth.png',
        contracts: {
            [ChainId.Zeta]: {
                address: '0x1e4bF3CaBD7707089138dD5a545B077413FA83Fc',
                decimal: 18,
            },
        },
    },
    {
        name: "uniBTC Token",
        symbol: TokenSymbol.UNIBTCZeta,
        chains: [ChainId.Zeta],
        icon: baseURL + 'unibtc.png',
        contracts: {
            [ChainId.Zeta]: {
                address: '0x6B2a01A5f79dEb4c2f3c0eDa7b01DF456FbD726a',
                decimal: 8, 
            },
        },
    },
    {
        name: "Staked ZETA",
        symbol: TokenSymbol.STZETAZeta,
        chains: [ChainId.Zeta],
        icon: baseURL + 'stzeta.svg',
        contracts: {
            [ChainId.Zeta]: {
                address: '0x45334a5B0a01cE6C260f2B570EC941C680EA62c0',
                decimal: 18, 
            },
        },
    },
    {
        name: "Accumulated Finance stZETA",
        symbol: TokenSymbol.STZETA2Zeta,
        chains: [ChainId.Zeta],
        icon: baseURL + 'stzetaaf.png',
        contracts: {
            [ChainId.Zeta]: {
                address: '0xcba2aeec821b0b119857a9ab39e09b034249681a',
                decimal: 18, 
            },
        },
    },
    {
        name: "Zebra USD",
        symbol: TokenSymbol.ZBRUSDZeta,
        chains: [ChainId.Zeta],
        icon: baseURL + 'zbrusd.png',
        contracts: {
            [ChainId.Zeta]: {
                address: '0x5d8dc3b34d7b07bb09495c480ad629900c0a2e02',
                decimal: 18, 
            },
        },
    },
    {
        name: "Runes Bridge Token",
        symbol: TokenSymbol.RBZeta,
        chains: [ChainId.Zeta],
        icon: baseURL + 'rb.png',
        contracts: {
            [ChainId.Zeta]: {
                address: '0xe21399d1ad140afebeb83158f8e85ab553f03bca',
                decimal: 18, 
            },
        },
    },
    {
        name: "HUHU Cat Token",
        symbol: TokenSymbol.HUHUZeta,
        chains: [ChainId.Zeta],
        icon: baseURL + 'huhu.png',
        contracts: {
            [ChainId.Zeta]: {
                address: '0x7a677e59dc2c8a42d6af3a62748c5595034a008b',
                decimal: 18, 
            },
        },
    },
    {
        name: "Zeta Cat Token",
        symbol: TokenSymbol.ZCATZeta,
        chains: [ChainId.Zeta],
        icon: baseURL + 'zcat.png',
        contracts: {
            [ChainId.Zeta]: {
                address: '0xc51e043B110672729d27332e1C145011065559b1',
                decimal: 18, 
            },
        },
    },
]
