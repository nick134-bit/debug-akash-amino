/* eslint-disable react/no-children-prop */
//@ts-nocheck
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Drawer,
	DrawerContent,
	DrawerOverlay,
	Flex,
	Grid,
	IconButton,
	Image,
	Link as ChakraLink,
	Link,
	Stack,
	Text,
	useColorMode,
	useDisclosure,
	Center,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { FaTwitter } from "react-icons/fa";
import { FiChevronLeft, FiMenu, FiMoon, FiSun } from "react-icons/fi";

import { handleChangeColorModeValue, MenuItemType } from "../components";
import { Logo } from "../components/react/logo";
import Home from "./index";

type IconTypeProps = string | IconType | JSX.Element | React.ReactNode | any;
type DefaultLinkItemType = {
	text: string;
	icon?: IconTypeProps;
};
type CategoryComponentType = {
	label: string;
	href: string;
};
interface LinkListType extends CategoryComponentType {
	icon?: React.ReactNode;
}
type SimpleLayoutType = {
	logo?: React.ReactNode;
	links?: Array<MenuItemType>;
	customLink?: Function;
	copyAddressButton?: React.ReactNode;
	isFullWidth?: boolean;
	children: React.ReactNode;
};
interface SimpleLayoutMenuType extends SimpleLayoutType {
	toggleColorMode: () => void;
}

/**
 *
 */
const MenuLinkButton = ({ icon, text }: DefaultLinkItemType) => {
	const { colorMode } = useColorMode();

	return (
		<Button
			title={text}
			display="flex"
			variant="ghost"
			justifyContent="start"
			alignItems="center"
			fontSize="lg"
			fontWeight="medium"
			textAlign="start"
			px={2}
			w="full"
			h="full"
			minH={10}
			maxH="fit-content"
			whiteSpace="break-spaces"
			lineHeight={1.1}
			_hover={{
				bg: handleChangeColorModeValue(colorMode, "gray.200", "gray.700"),
			}}
			_focus={{ boxShadow: "0 0 0 2px #C47CCF" }}
		>
			<Stack isInline={true} spacing={2} alignItems="center">
				{icon}
				<Text>{text}</Text>
			</Stack>
		</Button>
	);
};

/**
 *
 */
const MobileMenu = ({
	isFullWidth,
	logo,
	links,
	customLink,
	copyAddressButton,
	toggleColorMode,
	children,
}: SimpleLayoutMenuType) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const { colorMode } = useColorMode();

	return (
		<Box>
			{/* navbar */}
			<Flex
				justify="space-between"
				position="fixed"
				align="center"
				top={0}
				left={0}
				right={0}
				minH={12}
				py={2.5}
				px={4}
				zIndex="sticky"
				bg={handleChangeColorModeValue(colorMode, "white", "gray.800")}
				boxShadow={handleChangeColorModeValue(
					colorMode,
					"0 2px 2px -1px #d8d8d8",
					"0 2px 2px -1px #181818, 0 3px 5px -4px #0b0b0b",
				)}
			>
				<IconButton
					aria-label="menu"
					variant="outline"
					icon={<FiMenu opacity={0.8} />}
					_focus={{ outline: "none" }}
					onClick={onOpen}
				/>
				{Logo()}
				<IconButton
					aria-label="color mode"
					variant="outline"
					//@ts-ignore
					icon={handleChangeColorModeValue(colorMode, <FiMoon opacity={0.6} />, <FiSun opacity={0.8} />)}
					_focus={{ outline: "none" }}
					onClick={toggleColorMode}
				/>
			</Flex>
			{/* drawer */}
			<Drawer placement="left" isFullHeight={true} onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent maxW={isFullWidth ? "full" : "xs"}>
					<Grid templateRows="auto 1fr auto" position="absolute" top={0} right={0} left={0} bottom={0}>
						<Flex justify="end" p={4}>
							<IconButton
								aria-label="close"
								icon={<FiChevronLeft opacity={0.7} />}
								variant="outline"
								fontSize="xl"
								borderRadius="lg"
								_focus={{ outline: "none" }}
								onClick={onClose}
							/>
						</Flex>
						<Box position="relative">
							<Stack
								position="absolute"
								top={0}
								bottom={0}
								left={0}
								right={0}
								pl={4}
								pr={2}
								overflowY="scroll"
								css={{
									// For Firefox
									scrollbarWidth: "thin",
									// For Chrome and other browsers except Firefox
									"&::-webkit-scrollbar": {
										width: "10px",
										background: "transparent",
									},
									"&::-webkit-scrollbar-thumb": {
										background: handleChangeColorModeValue(
											colorMode,
											"rgba(0,0,0,0.1)",
											"rgba(255,255,255,0.1)",
										),
										borderRadius: "6px",
										border: "3px solid",
										borderColor: handleChangeColorModeValue(colorMode, "#fff", "#2D3748"),
									},
								}}
							>
								{
									//@ts-ignore
								links.map(({ title, href }) => (
									<>
										{customLink ? (
											customLink(title, href)
										) : (
											<NextLink href={href} passHref={true}>
												<ChakraLink _focus={{ textDecoration: "none" }}>
													<MenuLinkButton text={title} />
												</ChakraLink>
											</NextLink>
										)}
									</>
								))}
							</Stack>
						</Box>
					</Grid>
				</DrawerContent>
			</Drawer>
			{/* content */}
			<Box
				position="fixed"
				top="3.75rem"
				bottom={16}
				left={0}
				right={0}
				overflowY="scroll"
				css={{
					// For Firefox
					scrollbarWidth: "thin",
					// For Chrome and other browsers except Firefox
					"&::-webkit-scrollbar": {
						width: "10px",
						background: "transparent",
					},
					"&::-webkit-scrollbar-thumb": {
						background: handleChangeColorModeValue(colorMode, "rgba(0,0,0,0.1)", "rgba(255,255,255,0.1)"),
						borderRadius: "6px",
						border: "3px solid",
						borderColor: handleChangeColorModeValue(colorMode, "#fff", "#1A202C"),
					},
				}}
			>
				{children}
			</Box>
			<Box
				position="fixed"
				bottom={0}
				left={2}
				right={2}
				p={4}
				display="flex"
				justifyContent="center"
				zIndex="dropdown"
				w="auto"
				h="auto"
				lineHeight="shorter"
				bg={handleChangeColorModeValue(colorMode, "white", "gray.800")}
				borderRadius="6px 6px 0 0"
				boxShadow={handleChangeColorModeValue(
					colorMode,
					"0 0px 2px #e3e3e3, 0 0 16px -6px #c4c4c4",
					"0 -4px 5px #555",
				)}
				color={handleChangeColorModeValue(colorMode, "gray.700", "white")}
			>
				<Grid
					templateColumns={{ base: "1fr", md: "1fr 1fr" }}
					justifyContent="center"
					alignItems="center"
					w="full"
					gap={4}
				>
					{copyAddressButton && (
						<Box w="full" maxW={72} mx="auto">
							{copyAddressButton}
						</Box>
					)}
				</Grid>
			</Box>
		</Box>
	);
};

/**
 *
 */
const DesktopMenu = ({ logo, links, customLink, toggleColorMode, children }: SimpleLayoutMenuType) => {
	const { colorMode } = useColorMode();
	const colorModeIcon = handleChangeColorModeValue(colorMode, <FiMoon opacity={0.6} />, <FiSun opacity={0.7} />);

	return (
		<Flex>
			{/* sidebar */}
			<Stack
				spacing={4}
				position="fixed"
				top={0}
				bottom={0}
				left={0}
				minW={52}
				w="full"
				maxW={60}
				boxShadow={handleChangeColorModeValue(
					colorMode,
					"1px 0 1px #E2E8F0",
					"1px 0 1px rgba(255, 255, 255, 0.16)",
				)}
			>
				{logo && (
					<Flex justify="center" align="center" p={4} pb={0}>
						{Logo()}
					</Flex>
				)}
				<Stack
					flex={1}
					pl={4}
					pr={1.5}
					py={2}
					overflowY="scroll"
					css={{
						// For Firefox
						scrollbarWidth: "thin",
						// For Chrome and other browsers except Firefox
						"&::-webkit-scrollbar": {
							width: "10px",
							background: "transparent",
						},
						"&::-webkit-scrollbar-thumb": {
							background: handleChangeColorModeValue(
								colorMode,
								"rgba(0,0,0,0.1)",
								"rgba(255,255,255,0.1)",
							),
							borderRadius: "6px",
							border: "3px solid",
							borderColor: handleChangeColorModeValue(colorMode, "#fff", "#1A202C"),
						},
					}}
				>
					{links.map(({ title, href }) => {
						return (
							<>
								{customLink ? (
									customLink(title, href)
								) : (
									<NextLink href={href} passHref={true}>
										<ChakraLink
											//target="_blank"
											_hover={{ textDecoration: "none" }}
											_focus={{ outline: "none" }}
										>
											<MenuLinkButton text={title} />
										</ChakraLink>
									</NextLink>
								)}
							</>
						);
					})}
				</Stack>
			</Stack>
			{/* navbar */}
			<Box position="fixed" top={0} left={60} right={0} zIndex="sticky" px={4}>
				<Stack
					isInline={true}
					justifyContent="end"
					alignItems="center"
					bg={handleChangeColorModeValue(colorMode, "white", "gray.800")}
					boxShadow={handleChangeColorModeValue(
						colorMode,
						"0 1px 1px #E2E8F0",
						"0 1px 1px rgba(255, 255, 255, 0.16)",
					)}
					py={4}
				>
					{/*copyAddressButton && (
              <Center
                justifyContent="center"
                alignItems="center"
                w="full"
                maxW={60}
                minW="fit-content"
              >
                {copyAddressButton}
              </Center>
            )*/}
					<IconButton
						display="flex"
						aria-label="color mode"
						variant="outline"
						w={12}
						h={12}
						borderRadius="lg"
						icon={colorModeIcon}
						fontSize="lg"
						_hover={{
							bg: handleChangeColorModeValue(colorMode, "blackAlpha.50", "whiteAlpha.100"),
						}}
						_focus={{ outline: "none" }}
						onClick={toggleColorMode}
					/>
				</Stack>
			</Box>
			{/* content */}
			<Box
				position="fixed"
				top={20}
				left={60}
				bottom={0}
				right={0}
				overflowY="scroll"
				css={{
					// For Firefox
					scrollbarWidth: "thin",
					// For Chrome and other browsers except Firefox
					"&::-webkit-scrollbar": {
						width: "10px",
						background: "transparent",
					},
					"&::-webkit-scrollbar-thumb": {
						background: handleChangeColorModeValue(colorMode, "rgba(0,0,0,0.1)", "rgba(255,255,255,0.1)"),
						borderRadius: "6px",
						border: "3px solid",
						borderColor: handleChangeColorModeValue(colorMode, "#fff", "#1A202C"),
					},
				}}
			>
				<Box p={4}>{children}</Box>
			</Box>
		</Flex>
	);
};

/**
 *
 */
export const SimpleLayout = ({
	logo,
	links,
	customLink,
	copyAddressButton,
	isFullWidth,
	children,
}: SimpleLayoutType) => {
	const { toggleColorMode } = useColorMode();

	return (
		<Box w="full" h="full">
			<Box display={{ base: "none", lg: "block" }} w="full" h="full">
				<DesktopMenu
					logo={logo}
					links={links}
					customLink={customLink}
					copyAddressButton={copyAddressButton}
					children={children}
					toggleColorMode={toggleColorMode}
				/>
			</Box>
			<Box display={{ base: "block", lg: "none" }} w="full" h="full">
				<MobileMenu
					isFullWidth={isFullWidth}
					logo={logo}
					links={links}
					customLink={customLink}
					copyAddressButton={copyAddressButton}
					children={children}
					toggleColorMode={toggleColorMode}
				/>
			</Box>
		</Box>
	);
};
/**
 *
 */
export default function () {
	let logo;
	const { colorMode } = useColorMode();
	if (colorMode == "light") {
		logo = logo_dark;
	} else {
		logo = logo_bright;
	}
	return ClaimSatRew();
}
