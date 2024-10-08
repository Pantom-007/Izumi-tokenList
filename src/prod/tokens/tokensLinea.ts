import { TokenSymbol } from "../symbols/tokenLinea";
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
        name: "Celer BUSD",
        symbol: TokenSymbol.CEBUSDLinea,
        chains: [ChainId.Linea],
        icon: baseURL + 'busd.png',
        contracts: {
            [ChainId.Linea]: {
                address: '0x7d43AABC515C356145049227CeE54B608342c0ad',
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped BTC",
        symbol: TokenSymbol.WBTCLinea,
        chains: [ChainId.Linea],
        icon: baseURL + 'WBTC.png',
        contracts: {
            [ChainId.Linea]: {
                address: '0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4',
                decimal: 8,
            },
        },
    },
    {
        name: "USD Coin",
        symbol: TokenSymbol.USDCLinea,
        chains: [ChainId.Linea],
        icon: baseURL + 'usdc.png',
        contracts: {
            [ChainId.Linea]: {
                address: '0x176211869cA2b568f2A7D4EE941E073a821EE1ff',
                decimal: 6,
            },
        },
    },
    {
        name: "Tether USD",
        symbol: TokenSymbol.USDTLinea,
        chains: [ChainId.Linea],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.Linea]: {
                address: '0xA219439258ca9da29E9Cc4cE5596924745e12B93',
                decimal: 6,
            },
        },
    },
    {
        name: "Merlin BTC",
        symbol: TokenSymbol.MBTCLinea,
        icon: baseURL + 'mbtc.svg',
        chains: [ChainId.Linea],
        contracts: {
            [ChainId.Linea]: {
                address: '0xe4D584ae9b753e549cAE66200A6475d2f00705f7',
                decimal: 18,
            },
        },
    },
    {
        name: "Free Bridged SolvBTC",
        symbol: TokenSymbol.SOLVBTCLinea,
        icon: baseURL + 'solvbtc.png',
        chains: [ChainId.Linea],
        contracts: {
            [ChainId.Linea]: {
                address: '0x5FFcE65A40f6d3de5332766ffF6A28BF491C868c',
                decimal: 18,
            },
        },
    },
    {
        name: "Renzo Restaked ETH",
        symbol: TokenSymbol.EZETHLinea,
        icon: baseURL + 'ezeth.png',
        chains: [ChainId.Linea],
        contracts: {
            [ChainId.Linea]: {
                address: '0x2416092f143378750bb29b79ed961ab195cceea5',
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped eETH",
        symbol: TokenSymbol.WEETHLinea,
        icon: baseURL + 'weeth.png',
        chains: [ChainId.Linea],
        contracts: {
            [ChainId.Linea]: {
                address: '0x1bf74c010e6320bab11e2e5a532b5ac15e0b8aa6',
                decimal: 18,
            },
        },
    },
    {
        name: "Foxy Token",
        symbol: TokenSymbol.FOXYLinea,
        icon: baseURL + 'foxy.png',
        chains: [ChainId.Linea],
        contracts: {
            [ChainId.Linea]: {
                address: '0x5FBDF89403270a1846F5ae7D113A989F850d1566',
                decimal: 18,
            },
        },
    },
    {
        name: "LineaBank Token",
        symbol: TokenSymbol.LABLinea,
        chains: [ChainId.Linea],
        icon: baseURL + 'lab.png',
        contracts: {
            [ChainId.Linea]: {
                address: '0xB97F21D1f2508fF5c73E7B5AF02847640B1ff75d',
                decimal: 18,
            },
        },
    },
    {
        name: "ZeroLend Token",
        symbol: TokenSymbol.ZEROLinea,
        chains: [ChainId.Linea],
        icon: baseURL + 'zero.png',
        contracts: {
            [ChainId.Linea]: {
                address: '0x78354f8dccb269a615a7e0a24f9b0718fdc3c7a7',
                decimal: 18,
            },
        },
    },
    {
        name: "ZKUSD Stablecoin",
        symbol: TokenSymbol.ZKUSDLinea,
        chains: [ChainId.Linea],
        icon: baseURL + 'zkusdl.png',
        contracts: {
            [ChainId.Linea]: {
                address: '0x3cDEF3c187B271D8c2D71091d3a6506bC929f8B9',
                decimal: 18,
            },
        },
    },
    {
        name: "LYVE Debt Token",
        symbol: TokenSymbol.LYULinea,
        chains: [ChainId.Linea],
        icon: baseURL + 'lyu.png',
        contracts: {
            [ChainId.Linea]: {
                address: '0xb20116eE399f15647BB1eEf9A74f6ef3b58bc951',
                decimal: 18,
            },
        },
    },
    {
        name: "The Line Token",
        symbol: TokenSymbol.LINELinea,
        chains: [ChainId.Linea],
        icon: baseURL + 'line.png',
        contracts: {
            [ChainId.Linea]: {
                address: '0xfc04413ca9360256beb7c66ad73348faa8f92c68',
                decimal: 18,
            },
        },
    },
]
