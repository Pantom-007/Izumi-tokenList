import { TokenSymbol } from "../symbolList";
import { ChainId } from "../chainId";

export interface TokenInfo {
    chains: number[];
    name: string;
    symbol: TokenSymbol,
    icon: string;
    contracts: Partial<Record<ChainId, { address: string; decimal: number; wrapTokenAddress?: string; }>>;
}

const baseURL = 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/'

export const tokens: TokenInfo[] = [
    {
        name: "FeeA Token 10%",
        symbol: TokenSymbol.FeeA,
        chains: [ChainId.BSCTestnet],
        icon: baseURL + 'default.svg',
        contracts: {
            [ChainId.BSCTestnet]: {
                address: '0x0c08e73Abe0Fc445e727Ca9b779D22649110f782',
                decimal: 18,
                wrapTokenAddress: '0xa52A8da39fff2f31c8b60eee4aa0426e14a2D144',
            },
        },
    },
    {
        name: "FeeB Token 5%",
        symbol: TokenSymbol.FeeB,
        chains: [ChainId.BSCTestnet],
        icon: baseURL + 'default.svg',
        contracts: {
            [ChainId.BSCTestnet]: {
                address: '0x0C2CE63c797190dAE219A92AeBE4719Dc83AADdf',
                decimal: 18,
                wrapTokenAddress: '0x5a2FEa91d21a8D53180020F8272594bf0D6F36DC',
            },
        },
    },
    {
        name: "Test Ant Token",
        symbol: TokenSymbol.T5,
        chains: [ChainId.BSCTestnet],
        icon: baseURL + 'default.svg',
        contracts: {
            [ChainId.BSCTestnet]: {
                address: '0xEFa81F3a604f0FFE1A839444f7105Ccdc65365a5',
                decimal: 18,
                wrapTokenAddress: '0x89019A318d3dD5706903b974beE4C4040eb8F4f0',
            },
        },
    },
]
