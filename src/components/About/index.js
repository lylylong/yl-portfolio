import React from "react";
import {
  Grid,
  GridItem,
  Box,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

function About() {
  const [isLargerThan451] = useMediaQuery("(min-width: 451px)");

  return (
    <Box>
      <Grid
        h="200px"
        minChildWidth="300px"
        templateColumns="repeat(5, 1fr)"
        columns={[1, null, 2]}
        gap={4}
      >
        <GridItem colSpan={1}>
          <Image
            objectFit="cover"
            minW="80px"
            src={require(`../../assets/photo/photo.jpg`).default}
            alt="Yin Long Logo"
          />
        </GridItem>
        <GridItem colSpan={4}>
          <Box color="gray.500" fontSize="lg" fontWeight="bold">
            YIN LONG
          </Box>
          <Text color="gray.500" fontSize="md" fontWeight="normal">
            Front-end web developer leveraging graphic design background to
            build more intuitive user experiences and visually appealing on the
            web. Recently earned a certificate of coding boot camp from
            University of Toronto School of Continuing Studies, skilled in
            full-stack and proficient in front-end. Passionate about progressive
            web applications, with a focus on mobile-first web design. Completed
            single-page MERN apps, applied optimized UIUX and agile development.
            Looking to join a fast-paced, quality-driven team.
          </Text>
        </GridItem>
      </Grid>
      <Box h={isLargerThan451 ? "100px" : "280px"}></Box>
    </Box>
  );
}

export default About;
