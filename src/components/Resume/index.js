import React from "react";
import { DownloadIcon, CheckCircleIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Center,
  SimpleGrid,
  Box,
  Button,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

function Resume() {
  return (
    <SimpleGrid minChildWidth="150px" spacing="15px">
      <Center w="100%">
        <List>
          <ListItem my={8}>
            <Button colorScheme="teal" variant="solid">
              {" "}
              <a
                href="https://github.com/lylylong/yl-portfolio/files/6096837/Yin-Long-Resume.pdf"
                download="Yin-Long-Resume.pdf"
              >
                <DownloadIcon /> Resume{" "}
              </a>
            </Button>
          </ListItem>

          <ListItem my={8}>
            <Button colorScheme="pink" variant="solid">
              {" "}
              <a
                href="https://github.com/lylylong/yl-portfolio/blob/main/src/assets/download/Yin-Long-Resume.pdf"
                target="_blank"
              >
                <ViewIcon /> Resume{" "}
              </a>
            </Button>
          </ListItem>
        </List>
      </Center>
      <Box w="100%">
        <Text color="gray.500" fontSize="lg" fontWeight="bold" mb="2">
          Front-End Skills:
        </Text>
        <List spacing={3}>
          <ListItem>
            <CheckCircleIcon color="green.500" /> &nbsp; JavaScript
          </ListItem>
          <ListItem>
            <CheckCircleIcon color="green.500" /> &nbsp; HTML5
          </ListItem>
          <ListItem>
            <CheckCircleIcon color="green.500" /> &nbsp; CSS3
          </ListItem>
          <ListItem>
            <CheckCircleIcon color="green.500" /> &nbsp; React
          </ListItem>
          <ListItem>
            <CheckCircleIcon color="green.500" /> &nbsp; jQuery
          </ListItem>
          <ListItem>
            <CheckCircleIcon color="green.500" /> &nbsp; Bootstrap
          </ListItem>
          <ListItem>
            <CheckCircleIcon color="green.500" /> &nbsp; Handlebars.js
          </ListItem>
          <ListItem>
            <CheckCircleIcon color="green.500" /> &nbsp; Responsive Design
          </ListItem>
        </List>
      </Box>
      <Box w="100%">
        <Text color="gray.500" fontSize="lg" fontWeight="bold" mb="2">
          Back-End Skills:
        </Text>
        <List spacing={3}>
          <ListItem>
            <CheckCircleIcon color="green.500" /> &nbsp; Node.js
          </ListItem>
          <ListItem>
            <CheckCircleIcon color="green.500" /> &nbsp; Express.js
          </ListItem>
          <ListItem>
            <CheckCircleIcon color="green.500" /> &nbsp; MongoDB
          </ListItem>
          <ListItem>
            <CheckCircleIcon color="green.500" /> &nbsp; Mongoose
          </ListItem>
          <ListItem>
            <CheckCircleIcon color="green.500" /> &nbsp; MySQL
          </ListItem>
          <ListItem>
            <CheckCircleIcon color="green.500" /> &nbsp; Sequelize
          </ListItem>
          <ListItem>
            <CheckCircleIcon color="green.500" /> &nbsp; Progressive Web Apps
          </ListItem>
          <ListItem>
            <CheckCircleIcon color="green.500" /> &nbsp; RESTful API
          </ListItem>
        </List>
      </Box>
      <Box w="100%">
        <Text color="gray.500" fontSize="lg" fontWeight="bold" mb="2">
          Other Skills:
        </Text>
        <List spacing={3}>
          <ListItem>
            <CheckCircleIcon color="green.500" /> &nbsp; Adobe Creative Suite
          </ListItem>
          <ListItem>
            <CheckCircleIcon color="green.500" /> &nbsp; Graphic Design
          </ListItem>
          <ListItem>
            <CheckCircleIcon color="green.500" /> &nbsp; Testing
          </ListItem>
          <ListItem>
            <CheckCircleIcon color="green.500" /> &nbsp; Debugging
          </ListItem>
          <ListItem>
            <CheckCircleIcon color="green.500" /> &nbsp; Version Control/Git
          </ListItem>
          <ListItem>
            <CheckCircleIcon color="green.500" /> &nbsp; GitHub
          </ListItem>
          <ListItem>
            <CheckCircleIcon color="green.500" /> &nbsp; Heroku
          </ListItem>
          <ListItem>
            <CheckCircleIcon color="green.500" /> &nbsp; Insomnia
          </ListItem>
        </List>
      </Box>
    </SimpleGrid>
  );
}

export default Resume;
