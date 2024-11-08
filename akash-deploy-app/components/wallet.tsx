import { Center, Grid, GridItem, useToast } from "@chakra-ui/react";
import { useManager } from "@cosmos-kit/react";
import { useEffect, useMemo } from "react";

import { ChainOption, ConnectWalletButton, handleSelectChainDropdown } from "../components";
import { WalletCardSection } from "./card";
import { ChooseChain } from "./react/choose-chain";

/**
 *
 */
export const WalletSection = ({
	allowedChains,
	chainName,
	setChainName,
	walletActive
}: {
	allowedChains: Array<string>;
	chainName: string;
	setChainName: React.Dispatch<React.SetStateAction<string>>;
	walletActive:boolean
}) => {
	const { chainRecords, getChainLogo } = useManager();
	const toast = useToast();

	const chainOptions = useMemo(
		() =>
			allowedChains
				? chainRecords
						.filter((chainRecord) => allowedChains.includes(chainRecord.name))
						.map((chainRecord) => {
							return {
								chainName: chainRecord?.name,
								label: chainRecord?.chain.pretty_name,
								value: chainRecord?.name,
								icon: getChainLogo(chainRecord.name),
							};
						})
				: chainRecords.map((chainRecord) => {
						return {
							chainName: chainRecord?.name,
							label: chainRecord?.chain.pretty_name,
							value: chainRecord?.name,
							icon: getChainLogo(chainRecord.name),
						};
				  }),
		[chainRecords, getChainLogo],
	);

	useEffect(() => {
		setChainName(window?.localStorage.getItem("selected-chain") || "cosmoshub");
	}, []);

	/**
	 *
	 */
	const onChainChange: handleSelectChainDropdown = async (selectedValue: ChainOption | null) => {
		try{
		setChainName!(selectedValue!.chainName);
		}catch{
			toast({
				title: "Not implemented",
				description: "",
				status: "warning",
				duration: 10000,
				isClosable: true,
			});
		}
		if (selectedValue?.chainName) {
			window?.localStorage.setItem("selected-chain", selectedValue?.chainName);
		} else {
			window?.localStorage.removeItem("selected-chain");
		}
	};

	return (
		<Center py={16}>
			<Grid w="full" maxW="sm" templateColumns="1fr" rowGap={4} alignItems="center" justifyContent="center">
				<GridItem>
					<ChooseChain chainName={chainName} chainInfos={chainOptions} onChange={onChainChange} />
				</GridItem>
				{walletActive ? (chainName ? (
					<WalletCardSection chainName={chainName}></WalletCardSection>
				) : (
					<ConnectWalletButton buttonText={"Connect Wallet"} isDisabled />
				)): null}
			</Grid>
		</Center>
	);
};
