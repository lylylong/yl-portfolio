import React from "react";
import { Grid, GridItem, Image, Box } from "@chakra-ui/react";

function About() {
  return (
    <Grid
      h="200px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={2} w="230px" colSpan={1}>
        <Image
          w="100%"
          objectFit="cover"
          src={require(`../../assets/photo/photo.jpg`).default}
          alt="Yin Long Logo"
        />
      </GridItem>
      <GridItem colSpan={2} color="gray.500" fontSize="lg" fontWeight="bold">
        YIN LONG
      </GridItem>
      <GridItem colSpan={2} />
      <GridItem colSpan={4}>
        <Box color="gray.500">
          My name is Yin (Lyly) Long. I am a Junior front-end developer.
          Currently I work as a web designer and graphic designer in Toronto. I
          have 1-year front-end development experience and 7-year design
          experience. I am seeking more front-end development opportunities at
          this moment. I am a fast learner who is capable of completing any
          project from start to finish, generating business growth and customer
          loyalty by producing and implementing effective web, UIUX and graphic
          design solutions in an effective manner. In addition, I am also
          responsible for cultivating solid business relationships with all team
          members, which results in creative projects being completed ahead of
          schedule.
        </Box>
      </GridItem>
    </Grid>
  );
}

export default About;
