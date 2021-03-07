import React, { useEffect } from "react";
import { titleCase } from "../../utils/helper";

import {
  //   Link,
  Box,
  //   Heading,
  Center,
  Text,
  Stack,
  Flex,
  useColorModeValue,
  Button,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";

import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

// the nav is on everypage
function Nav(props) {
  // use props
  const { pages = [], currentPage, setCurrentPage } = props;

  const [isOpenToggle, setIsOpen] = React.useState(false);
  //   const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const toggle = () => setIsOpen(!isOpenToggle);

  // change the title name when stwiching the page
  useEffect(() => {
    document.title = "Yin - " + titleCase(currentPage.name);
  }, [currentPage]);

  const [isLargerThan451] = useMediaQuery("(min-width: 451px)");

  return (
    <>
      <Box>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          w="100%"
          p={5}
          pl={2}
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
        >
          <Center
            w="350px"
            w={isLargerThan451 ? "350px" : "300px"}
            color={["primary.500", "primary.500"]}
          >
            <Stack direction="row" justify="space-between" align="center">
              <Image
                boxSize={isLargerThan451 ? "48px" : "40px"}
                objectFit="cover"
                src="https://user-images.githubusercontent.com/70302749/109902647-bc264600-7c68-11eb-98be-38a860b35fa6.png"
                alt="Yin Long Logo"
              />
              <Text
                color="gray"
                fontWeight="thin"
                fontSize={isLargerThan451 ? "4xl" : "3xl"}
              >
                Yin Long Portfolio
              </Text>
            </Stack>
          </Center>

          <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            {isOpenToggle ? <CloseIcon /> : <HamburgerIcon />}
          </Box>

          <Box
            display={{ base: isOpenToggle ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
          >
            <Stack
              spacing={8}
              align="center"
              justify={["center", "space-between", "flex-end", "flex-end"]}
              direction={["column", "row", "row", "row"]}
              pt={[4, 4, 0, 0]}
            >
              {pages.map((page) => (
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  ref={btnRef}
                  key={page.name}
                >
                  <Text
                    color="gray"
                    fontWeight="normal"
                    onClick={() => setCurrentPage(page)}
                    className={`mx-2 ${
                      currentPage.name === page.name && "navActive"
                    }`}
                  >
                    {titleCase(page.name)}
                  </Text>
                </Button>
              ))}
            </Stack>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Nav;
