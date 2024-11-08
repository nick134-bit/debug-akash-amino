import { LinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FeatureProps } from "./types";

export const Product = ({ title, text, href }: FeatureProps) => {
  return (
    <Link href={href} target="_blank" _hover={{ textDecoration: "none" }}>
      <Stack
        h="full"
        minH={36}
        p={5}
        spacing={2.5}
        justifyContent="center"
        borderRadius={5}
        boxShadow={"0 2px 5px #ccc"}
        _hover={{
          color: "purple.600",
          boxShadow: "0 2px 5px #bca5e9",
        }}
      >
        <Heading fontSize="xl">{title}&ensp;&rarr;</Heading>
        <Text>{text}</Text>
      </Stack>
    </Link>
  );
};

export const Dependency = ({ title, text, href }: FeatureProps) => {
  return (
    <Link href={href} target="_blank" _hover={{ textDecoration: "none" }}>
      <Stack
        isInline={true}
        key={title}
        spacing={3}
        h="full"
        p={4}
        justifyContent="start"
        borderRadius="md"
        border="1px solid"
        borderColor={"blackAlpha.200"}
        _hover={{
          boxShadow: "0 2px 5px #ccc",
        }}
      >
        <Box color={"primary.500"}>
          <Icon as={LinkIcon} />
        </Box>
        <Stack spacing={1}>
          <Text fontSize="lg" fontWeight="semibold">
            {title}
          </Text>
          <Text
            lineHeight="short"
            color={"blackAlpha.700"}
          >
            {text}
          </Text>
        </Stack>
      </Stack>
    </Link>
  );
};
