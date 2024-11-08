import { Box, Button, Text} from "@chakra-ui/react";
import { toUtf8 } from "@cosmjs/encoding";
import { StdFee } from "@cosmjs/stargate";
import { ChainName } from "@cosmos-kit/core";
import { useChain } from "@cosmos-kit/react";
import React, { useEffect, useState } from "react";

import { WalletSection } from "../components";
import { SimpleLayout } from "./design";
import { akash, getSigningAkashClient } from "../public/types/";

import { certificateManager } from "@akashnetwork/akashjs/build/certificates/certificate-manager";
import { TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";







const allowed = ["akash"];


/**
 *
 */
export default function Home() {
    const create = akash.deployment.v1beta3.MessageComposer.fromPartial.createDeployment
    const cert = akash.cert.v1beta3.MessageComposer.fromPartial.createCertificate
    const [chainName, setChainName] = useState<ChainName>("akash");
    const [gas, setGas] = useState<any>("");
    const {
        address,
        chain,
        getOfflineSignerAmino,
    } = useChain(chainName);


    useEffect(() => {
        setChainName(window?.localStorage.getItem("selected-chain") || "akash");
    }, []);

    useEffect(() => {
        setGas({ gas_price: 0.0025, gas_denom: 'uakt' });
    }, [chainName, chain]);


    async function sendTX(e: React.MouseEvent<HTMLElement>) {
        const offlineSigner: any = await getOfflineSignerAmino()
        const signingClient = await getSigningAkashClient({ rpcEndpoint: "https://akash-rpc.polkachu.com", signer: offlineSigner })
        console.log(signingClient)

        const certss = certificateManager.generatePEM(address!)

        let sending = []

        const certificate = cert({
            "owner": address!,
            "cert": toUtf8(certss.cert),
            "pubkey": toUtf8(certss.publicKey)
        })

        sending.push(certificate)

        // Create Deployment
        const deploymentMSG = create({
            "id": {
                "owner": address!,
                "dseq": BigInt("17095691"),
            },
            "groups": [
                {
                    "name": "dcloud",
                    "resources": [
                        {
                            "resource": {
                                "endpoints": [
                                    {
                                        "kind": -1,
                                        "sequenceNumber": 0
                                    }
                                ],
                                "cpu": {
                                    "units": {
                                        "val": toUtf8("500")
                                    },
                                    "attributes": []

                                },
                                "memory": {
                                    "quantity": {
                                        "val": toUtf8("536870912")
                                    },
                                    "attributes": []
                                },
                                "storage": [
                                    {
                                        "name": "default",
                                        "quantity": {
                                            "val": toUtf8("536870912")
                                        },
                                        "attributes": []
                                    }
                                ],
                                "gpu": {
                                    "units": {
                                        "val": toUtf8("0")
                                    },
                                    "attributes": []
                                },
                                "id": 1
                            },
                            "price": {
                                "denom": "uakt",
                                "amount": "1000"
                            },
                            "count": 1
                        }
                    ],
                    "requirements": {
                        "attributes": [],
                        "signedBy": {
                            "allOf": [],
                            "anyOf": []
                        }
                    }
                }
            ],
            "version": Uint8Array.from([37, 225, 158, 136, 112, 119, 143, 59, 121, 66, 51, 110, 219, 202, 107, 229, 202, 148, 147, 70, 75, 239, 179, 201, 90, 163, 222, 45, 218, 11, 91, 33]),
            "deposit": {
                "denom": "uakt",
                "amount": "500000"
            },
            "depositor": address!
        })

        sending.push(deploymentMSG)
        let simulatedGas = 0;

        try {
            simulatedGas = await signingClient.simulate(address!, sending, undefined);
            console.log(simulatedGas)
        } catch (e) {
            console.error(e);
        }

        const fee: StdFee = {
            amount: [
                {
                    denom: gas.gas_denom,
                    amount: String(Math.ceil((simulatedGas * 1.3) * gas.gas_price)),
                },
            ],
            gas: String(simulatedGas),
        };
        console.log(fee)

        // Disable fee setting keplr

        if (window?.keplr){
            window.keplr.defaultOptions = {
                sign: {
                  preferNoSetFee: true,
                },
              }
            
        }
        try {
            console.log(address, await signingClient.getAccount(address!))
            let tmtp_sign = await signingClient.sign(address!, sending, {amount: [{denom: "uakt", amount: "450"}], gas: String(simulatedGas)},"")
            const resp = await signingClient.broadcastTx(TxRaw.encode(tmtp_sign).finish())
            console.log("Tx successful", resp)
        } catch (e: any) {
            const error = JSON.stringify(e);
            console.log(e);
        }
    }

    return (
        <Box w="full" h="full" minH={"calc(100vh)"} alignItems={"center"}>
            <SimpleLayout links={[]} isFullWidth={false}>
                <Text fontSize={30} fontWeight={"bold"} mx="auto" w="full" maxW={"60"} align={"center"}>
                    Deploy Debug Application
                </Text>
                <Box mx="auto" w="full" maxW={"calc(50vw)"} marginTop={"-10"} alignItems={'center'} alignContent={"center"}>
                    <WalletSection allowedChains={allowed} chainName={chainName} setChainName={setChainName} walletActive={true} />
                    <Button
                        name="ManualExecBtn"
                        background={"linear-gradient(109.6deg, rgba(157,75,199,1) 11.2%, rgba(119,81,204,1) 83.1%)"}
                        mx="auto"
                        w="full"
                        marginTop={"5"}
                        alignSelf={"center"}
                        color={"white"}
                        onClick={sendTX}
                        disabled={false}
                    >
                        Send DeploymentTransaction
                    </Button>
                </Box>
            </SimpleLayout>
        </Box>
    );
}
