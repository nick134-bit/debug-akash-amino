import { ChakraProvider } from '@chakra-ui/react'
import { ChainProvider } from '@cosmos-kit/react'
import { chains, assets } from 'chain-registry'
import { wallets } from '@cosmos-kit/keplr'

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <ChainProvider
                chains={chains}
                assetLists={assets}
                wallets={wallets}
                walletConnectOptions={{
                    signClient: {
                        projectId: "a8510432ebb71e6948cfd6cde54b70f7",
                        relayUrl: "wss://relay.walletconnect.org",
                        metadata: {
                            name: "CosmosKit Template",
                            description: "CosmosKit dapp template",
                            url: "https://docs.cosmoskit.com/",
                            icons: [],
                        },
                    },
                }}
                wrappedWithChakra={true}
            >
                <Component {...pageProps} />
            </ChainProvider>
        </ChakraProvider>
    )
}

export default MyApp