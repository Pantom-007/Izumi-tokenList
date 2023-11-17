import { TokenSymbol } from "../symbols/tokenSymbol";
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
        name: "Ontology Gas",
        symbol: TokenSymbol.ONG,
        chains: [ChainId.OntologyTest],
        icon: baseURL + 'ong.png',
        contracts: {
            [ChainId.OntologyTest]: {
                address: '0xe8cf015f797877a9a23e80447429c0b0f04e114b', //WONG
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped ONG",
        symbol: TokenSymbol.WONG,
        chains: [ChainId.OntologyTest],
        icon: baseURL + 'ong.png',
        contracts: {
            [ChainId.OntologyTest]: {
                address: '0xe8cf015f797877a9a23e80447429c0b0f04e114b',
                decimal: 18,
            },
        },
    },
    {
        name: "Arctic Token",
        symbol: TokenSymbol.ARC,
        chains: [ChainId.AuroraTestnet],
        icon: baseURL + 'arc.png',
        contracts: {
            [ChainId.AuroraTestnet]: {
                address: '0xa341a31CCdD570cAEab465c96D64c880db609021',
                decimal: 18,
            },
        },
    },
    {
        name: "Aurora Token",
        symbol: TokenSymbol.AURORA,
        chains: [ChainId.AuroraTestnet],
        icon: baseURL + 'aurora.png',
        contracts: {
            [ChainId.AuroraTestnet]: {
                address: '0xcC2DE5D1A8154f7fa0e80a6732a38422D8fBEB10',
                decimal: 18,
            },
        },
    },
    {
        name: "Rollux Syscoin Token",
        symbol: TokenSymbol.RSYS,
        chains: [ChainId.RolluxBedrockTest],
        icon: baseURL + 'sys.png',
        contracts: {
            [ChainId.RolluxBedrockTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF', //wrapped rsys
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped Rollux Syscoin Token",
        symbol: TokenSymbol.WRSYS,
        chains: [ChainId.RolluxBedrockTest],
        icon: baseURL + 'sys.png',
        contracts: {
            [ChainId.RolluxBedrockTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF',
                decimal: 18,
            },
        },
    },
    {
        name: 'iZUMi Token',
        symbol: TokenSymbol.IZI,
        icon: baseURL + 'izumi.svg',
        chains: [
            ChainId.Izumi,
            ChainId.OpsideRolluxTest,
            ChainId.GasZeroGoerliL2,
            ChainId.ZetaTest,
            ChainId.BSCTestnet, 
            ChainId.AuroraTestnet, 
            ChainId.ScrollTestnet, 
            ChainId.ZkSyncAlphaTest, 
            ChainId.RolluxBedrockTest, 
            ChainId.MantleTestnet, 
            ChainId.OntologyTest, 
            ChainId.LineaTest, 
            ChainId.MantaTest, 
            ChainId.SkaleTest, 
            ChainId.KromaTest, 
            ChainId.ScrollSepoliaTest,
            ChainId.X1Test,
        ],
        contracts: {
            [ChainId.Izumi]: {
                address: '0xEe5e3852434eB67F8e9E97015e32845861ea15E8',
                decimal: 18,
            },
            [ChainId.BSCTestnet]: {
                address: '0x551197e6350936976DfFB66B2c3bb15DDB723250',
                decimal: 18,
            },
            [ChainId.AuroraTestnet]: {
                address: '0x876508837C162aCedcc5dd7721015E83cbb4e339',
                decimal: 18,
            },
            [ChainId.MantleTestnet]: {
                address: '0x876508837C162aCedcc5dd7721015E83cbb4e339',
                decimal: 18,
            },
            [ChainId.ScrollTestnet]: {
                address: '0xdB1A8CF7e6d2fa2C0775D090BCc2cfB3A9e00CdC',
                decimal: 18,
            },
            [ChainId.ZkSyncAlphaTest]: {
                address: '0xA5900cce51c45Ab9730039943B3863C822342034',
                decimal: 18,
            },
            [ChainId.RolluxBedrockTest]: {
                address: '0x6a7436775c0d0B70cfF4c5365404ec37c9d9aF4b',
                decimal: 18,
            },
            [ChainId.OntologyTest]: {
                address: '0x876508837C162aCedcc5dd7721015E83cbb4e339',
                decimal: 18,
            },
            [ChainId.LineaTest]: {
                address: '0x876508837C162aCedcc5dd7721015E83cbb4e339',
                decimal: 18,
            },
            [ChainId.OpsideRolluxTest]: {
                address: '0x876508837C162aCedcc5dd7721015E83cbb4e339',
                decimal: 18,
            },
            [ChainId.MantaTest]: {
                address: '0x6AECfe44225A50895e9EC7ca46377B9397D1Bb5b',
                decimal: 18,
            },
            [ChainId.SkaleTest]: {
                address: '0x551197e6350936976DfFB66B2c3bb15DDB723250',
                decimal: 18,
            },
            [ChainId.KromaTest]: {
                address: '0xEB122DE19FeA9eD039E2d087113db26017f5F91a',
                decimal: 18,
            },
            [ChainId.ScrollSepoliaTest]: {
                address: '0xEB122DE19FeA9eD039E2d087113db26017f5F91a',
                decimal: 18,
            },
            [ChainId.GasZeroGoerliL2]: {
                address: '0x6a7436775c0d0B70cfF4c5365404ec37c9d9aF4b',
                decimal: 18,
            },
            [ChainId.ZetaTest]: {
                address: '0xb0453a1bAf6056393897e60dfd851C61A825ef67',
                decimal: 18,
            },
            [ChainId.X1Test]: {
                address: '0x551197e6350936976DfFB66B2c3bb15DDB723250',
                decimal: 18,
            },
        },
    },
    {
        name: "iZUMi Bond USD",
        symbol: TokenSymbol.IUSD,
        chains: [ChainId.BSCTestnet, ChainId.AuroraTestnet, ChainId.ZkSyncAlphaTest, ChainId.OntologyTest],
        icon: baseURL + 'iusd.png',
        contracts: {
            [ChainId.BSCTestnet]: {
                address: '0x60FE1bE62fa2082b0897eA87DF8D2CfD45185D30',
                decimal: 18,
            },
            [ChainId.AuroraTestnet]: {
                address: '0xb0453a1bAf6056393897e60dfd851C61A825ef67',
                decimal: 18,
            },
            [ChainId.ZkSyncAlphaTest]: {
                address: '0xC0ddcc53b3F971EdeEc65E69D5cb01B518a7F7C8',
                decimal: 18,
            },
            [ChainId.OntologyTest]: {
                address: '0x551197e6350936976DfFB66B2c3bb15DDB723250',
                decimal: 18,
            },
        },
    },
    {
        name: "Binance USD",
        symbol: TokenSymbol.BUSD,
        chains: [ChainId.BSCTestnet],
        icon: baseURL + 'busd.png',
        contracts: {
            [ChainId.BSCTestnet]: {
                address: '0xd88972676f5D0997c8150A3d2C4634CbaaDD3396',
                decimal: 18,
            },
        },
    },
    {
        name: 'USD Coin',
        symbol: TokenSymbol.USDC,
        icon: baseURL + 'usdc.png',
        chains: [
            ChainId.Izumi, 
            ChainId.OpsideRolluxTest,
            ChainId.BSCTestnet, 
            ChainId.AuroraTestnet, 
            ChainId.RolluxBedrockTest, 
            ChainId.SkaleTest, 
            ChainId.GasZeroGoerliL2,
            ChainId.X1Test,
        ],
        contracts: {
            [ChainId.Izumi]: {
                address: '0xe507AAC9eFb2A08F53C7BC73B3B1b8BCf883E41B',
                decimal: 6,
            },
            [ChainId.BSCTestnet]: {
                address: '0x876508837C162aCedcc5dd7721015E83cbb4e339',
                decimal: 6,
            },
            [ChainId.AuroraTestnet]: {
                address: '0x6AECfe44225A50895e9EC7ca46377B9397D1Bb5b',
                decimal: 6,
            },
            [ChainId.RolluxBedrockTest]: {
                address: '0x6AECfe44225A50895e9EC7ca46377B9397D1Bb5b',
                decimal: 18,
            },
            [ChainId.OpsideRolluxTest]: {
                address: '0x6a7436775c0d0B70cfF4c5365404ec37c9d9aF4b',
                decimal: 18,
            },
            [ChainId.SkaleTest]: {
                address: '0x6AECfe44225A50895e9EC7ca46377B9397D1Bb5b',
                decimal: 18,
            },
            [ChainId.GasZeroGoerliL2]: {
                address: '0xb0453a1bAf6056393897e60dfd851C61A825ef67',
                decimal: 18,
            },
            [ChainId.X1Test]: {
                address: '0x6AECfe44225A50895e9EC7ca46377B9397D1Bb5b',
                decimal: 18,
            },
        },
    },
    {
        name: "Tether USD",
        symbol: TokenSymbol.USDT,
        icon: baseURL + 'usdt.png',
        chains: [ChainId.Izumi, 
            ChainId.OpsideRolluxTest,
            ChainId.ZetaTest,
            ChainId.BSCTestnet, 
            ChainId.AuroraTestnet, 
            ChainId.ScrollTestnet, 
            ChainId.RolluxBedrockTest, 
            ChainId.MantaTest, ChainId.KromaTest, ChainId.ScrollSepoliaTest, ChainId.GasZeroGoerliL2,
            ChainId.X1Test,
        ],
        contracts: {
            [ChainId.Izumi]: {
                address: '0x2d2bA91b026E08e0f23Eb01d7ecAb0e7E279a45f',
                decimal: 6,
            },
            [ChainId.BSCTestnet]: {
                address: '0x6AECfe44225A50895e9EC7ca46377B9397D1Bb5b',
                decimal: 6,
            },
            [ChainId.AuroraTestnet]: {
                address: '0x6a7436775c0d0B70cfF4c5365404ec37c9d9aF4b',
                decimal: 6,
            },
            [ChainId.MantleTestnet]: {
                address: '0x6AECfe44225A50895e9EC7ca46377B9397D1Bb5b',
                decimal: 18,
            },
            [ChainId.ScrollTestnet]: {
                address: '0xe9805A0bA7A8E253fd93A3f9b360619c4819da50',
                decimal: 18,
            },
            [ChainId.RolluxBedrockTest]: {
                address: '0x876508837C162aCedcc5dd7721015E83cbb4e339',
                decimal: 18,
            },
            [ChainId.OpsideRolluxTest]: {
                address: '0x6AECfe44225A50895e9EC7ca46377B9397D1Bb5b',
                decimal: 18,
            },
            [ChainId.MantaTest]: {
                address: '0x6a7436775c0d0B70cfF4c5365404ec37c9d9aF4b',
                decimal: 18,
            },
            [ChainId.KromaTest]: {
                address: '0x551197e6350936976DfFB66B2c3bb15DDB723250',
                decimal: 18,
            },
            [ChainId.ScrollSepoliaTest]: {
                address: '0x551197e6350936976DfFB66B2c3bb15DDB723250',
                decimal: 18,
            },
            [ChainId.GasZeroGoerliL2]: {
                address: '0x2A2E08ea99E63482BDad8Bf69c7b69752F07736F',
                decimal: 18,
            },
            [ChainId.ZetaTest]: {
                address: '0x6a7436775c0d0B70cfF4c5365404ec37c9d9aF4b',
                decimal: 18,
            },
            [ChainId.X1Test]: {
                address: '0x876508837C162aCedcc5dd7721015E83cbb4e339',
                decimal: 18,
            },
        },
    },
    {
        name: 'Ether',
        symbol: TokenSymbol.ETH,
        chains: [ChainId.Izumi, ChainId.AuroraTestnet, ChainId.ScrollTestnet, ChainId.ZkSyncAlphaTest, ChainId.LineaTest, ChainId.MantaTest, ChainId.KromaTest, ChainId.ScrollSepoliaTest],
        icon: baseURL + 'eth.png',
        contracts: {
            [ChainId.Izumi]: {
                address: '0x3AD23A16A81Cd40010F39309876978F20DD2f682', //Wrapped ETH
                decimal: 18,
            },
            [ChainId.AuroraTestnet]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF',
                decimal: 18,
            },
            [ChainId.ScrollTestnet]: {
                address: '0xCE7fe0A153EF73759d253372b783E12a04849F35', //WETH
                decimal: 18,
            },
            [ChainId.ZkSyncAlphaTest]: {
                address: '0x8C3e3f2983DB650727F3e05B7a7773e4D641537B', //WETH
                decimal: 18,
            },
            [ChainId.LineaTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF',  //WETH
                decimal: 18,
            },
            [ChainId.MantaTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF', //WETH
                decimal: 18,
            },
            [ChainId.KromaTest]: {
                address: '0x4200000000000000000000000000000000000001', //WETH
                decimal: 18,
            },
            [ChainId.ScrollSepoliaTest]: {
                address: '0xfa6a407c4C49Ea1D46569c1A4Bcf71C3437bE54c', //WETH
                decimal: 18,
            },
        },
    },
    {
        name: 'Wrapped Ether',
        symbol: TokenSymbol.WETH,
        chains: [ChainId.AuroraTestnet, ChainId.ScrollTestnet, ChainId.ZkSyncAlphaTest, ChainId.MantleTestnet, ChainId.LineaTest, ChainId.MantaTest, ChainId.KromaTest, ChainId.ScrollSepoliaTest],
        icon: baseURL + 'WETH.png',
        contracts: {
            [ChainId.AuroraTestnet]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF',
                decimal: 18,
            },
            [ChainId.ScrollTestnet]: {
                address: '0xCE7fe0A153EF73759d253372b783E12a04849F35',
                decimal: 18,
            },
            [ChainId.ZkSyncAlphaTest]: {
                address: '0x8C3e3f2983DB650727F3e05B7a7773e4D641537B',
                decimal: 18,
            },
            [ChainId.MantleTestnet]: {
                address: '0xdEAddEaDdeadDEadDEADDEAddEADDEAddead1111',
                decimal: 18,
            },
            [ChainId.LineaTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF',
                decimal: 18,
            },
            [ChainId.MantaTest]: {
                address: '0x67A1f4A939b477A6b7c5BF94D97E45dE87E608eF',
                decimal: 18,
            },
            [ChainId.KromaTest]: {
                address: '0x4200000000000000000000000000000000000001', 
                decimal: 18,
            },
            [ChainId.ScrollSepoliaTest]: {
                address: '0xfa6a407c4C49Ea1D46569c1A4Bcf71C3437bE54c', 
                decimal: 18,
            },
        },
    },
    {
        name: 'BNB',
        symbol: TokenSymbol.BNB,
        chains: [ChainId.BSCTestnet],
        icon: baseURL + 'bnb.png',
        contracts: {
            [ChainId.BSCTestnet]: {
                address: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', //Wrapped BNB
                decimal: 18,
            },
        },
    },
    {
        name: 'Wrapped BNB',
        symbol: TokenSymbol.WBNB,
        chains: [ChainId.BSCTestnet],
        icon: baseURL + 'bnb.png',
        contracts: {
            [ChainId.BSCTestnet]: {
                address: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', //Wrapped BNB
                decimal: 18,
            },
        },
    },
    {
        name: "BIT Dao",
        symbol: TokenSymbol.BIT,
        chains: [ChainId.Izumi, ChainId.BSCTestnet, ChainId.MantleTestnet],
        icon: baseURL + 'bit.png',
        contracts: {
            [ChainId.Izumi]: {
                address: '0x41BC21bdcF0FA87ae6eeFcBE0e4dB29dB2b650C1',
                decimal: 18,
            },
            [ChainId.BSCTestnet]: {
                address: '0xac360dc0F8EF1C94Ab4034220E0A01567acbFdE4',
                decimal: 18,
            },
            [ChainId.MantleTestnet]: {
                address: '0x69AC69b272f96F5f17DDD9da3832ad9Dc86D1d8A', //WBIT
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped BIT",
        symbol: TokenSymbol.WBIT,
        chains: [ChainId.MantleTestnet],
        icon: baseURL + 'bit.png',
        contracts: {
            [ChainId.MantleTestnet]: {
                address: '0x69AC69b272f96F5f17DDD9da3832ad9Dc86D1d8A',
                decimal: 18,
            },
        },
    },
    {
        name: "Decentralized Eternal Virtual Traveller",
        symbol: TokenSymbol.DEVT,
        chains: [ChainId.Izumi],
        icon: baseURL + 'devt.png',
        contracts: {
            [ChainId.Izumi]: {
                address: '0xD93FfD9B4d5D643A175B7DcBf4Fb0dA0016D35C7',
                decimal: 18,
            },
        },
    },
    {
        name: "YIN Finance",
        symbol: TokenSymbol.YIN,
        chains: [ChainId.Izumi, ChainId.BSCTestnet],
        icon: baseURL + 'yin.png',
        contracts: {
            [ChainId.Izumi]: {
                address: '0x628571078add0031Ff6E9975AE6ddE1123fC423b',
                decimal: 18,
            },
            [ChainId.BSCTestnet]: {
                address: '0xB2cdca00D1B07064064e83C377aE9A490ad06bc2',
                decimal: 18,
            },
        },
    },
]
