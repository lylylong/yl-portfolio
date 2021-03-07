import React from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Divider,
  Link,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { ReactNode } from "react";

// const SocialButton = () => {
//   return (
//     <chakra.button
//       bg="teal.600"
//       rounded={"full"}
//       w={8}
//       h={8}
//       cursor={"pointer"}
//       as={"a"}
//       display={"inline-flex"}
//       alignItems={"center"}
//       justifyContent={"center"}
//       _hover={{
//         bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
//       }}
//       transition={"background 0.3s ease"}
//     ></chakra.button>
//   );
// };

export default function Footer() {
  return (
    <Box className="flex-row" mt={10} color={useColorModeValue("gray.400")}>
      <Divider />
      <Container
        as={Stack}
        maxW={"7xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© Yin Long 2021. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <Link
            color="teal.500"
            href="https://github.com/lylylong"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button
              colorScheme="white"
              variant="outline"
              leftIcon={<FaGithub />}
            >
              Github
            </Button>
          </Link>
          <Link
            color="blue.500"
            href="https://www.linkedin.com/in/yin-long/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button
              colorScheme="white"
              variant="outline"
              leftIcon={<FaLinkedin />}
            >
              Linkedin
            </Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
