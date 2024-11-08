import { Box, Image, Link, useColorMode } from "@chakra-ui/react";
/**
 *
 */
export function Logo() {
	const { colorMode } = useColorMode();
	return (
		<Box w={{ base: 10, lg: 20 }} h={{ base: 10, lg: 20 }}>
			<Link href="https://nodumpnode.com/" isExternal>
				<Image
					src={
						colorMode === "light"
							? "https://nodumpnode.com/images/ndn-logo-dark-svg.svg"
							: "https://nodumpnode.com/images/ndn-logo-light-svg.svg"
					}
				/>
			</Link>
		</Box>
	);
}
