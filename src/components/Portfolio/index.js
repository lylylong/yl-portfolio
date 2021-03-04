import React, { useState } from "react";
import { titleCaseRemoveHyphen } from "../../utils/helper";
import { Flex, Box, Image, Link, Badge } from "@chakra-ui/react";

function Portfolio() {
  // all projects
  const [projects] = useState([
    {
      name: "moviegoer",
      description: "MERN stack/PWA/SPA Project",
      link: "https://moviegoer-2021.herokuapp.com/",
      repo: "https://github.com/lylylong/moviegoer.git",
    },
    {
      name: "cake-app",
      description: "Model-View-Controller Project",
      link: "https://cake-lab-app.herokuapp.com/",
      repo: "https://github.com/lylylong/cake-app",
    },
    {
      name: "COVID-19-Tracker",
      description: "JaveScript/CSS/HTML Project",
      link: "https://lylylong.github.io/COVID-19-Tracker/",
      repo: "https://github.com/lylylong/COVID-19-Tracker",
    },
    {
      name: "work-time-planner",
      description: "JaveScript/CSS/HTML Project",
      link: "https://lylylong.github.io/work-time-planner/",
      repo: "https://github.com/lylylong/work-time-planner.git",
    },
    {
      name: "expense-tracker",
      description: "Node.js/express/mongoDB Project",
      link: "https://expense-tracker-2021.herokuapp.com/",
      repo: "https://github.com/lylylong/expense-tracker.git",
    },
    {
      name: "my-weather-channel",
      description: "JaveScript/CSS/HTML Project",
      link: "https://lylylong.github.io/my-weather-channel/",
      repo: "https://github.com/lylylong/my-weather-channel.git",
    },
  ]);
  //   const { name, description, link, repo } = [projects[i]];

  return (
    <Flex align="center" justify="space-between" wrap="wrap" w="100%" p={6}>
      {projects.map((project, i) => (
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          mt="8"
        >
          <Image
            src={require(`../../assets/projects/${project.name}.jpg`).default}
            alt={project.name + " app"}
          />

          <Box p="5" pt="3">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              mb="3"
              isTruncated
            >
              {titleCaseRemoveHyphen(project.name)}
            </Box>
            <Box d="flex" alignItems="baseline">
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
              >
                <Link color="teal.500" href={project.link} target="_blank">
                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    Deployed URL
                  </Badge>
                </Link>
                <Link
                  color="pink.500"
                  href={project.repo}
                  target="_blank"
                  ml="2"
                >
                  <Badge borderRadius="full" px="2" colorScheme="pink">
                    GitHub Link
                  </Badge>
                </Link>
              </Box>
            </Box>

            <Box mt="1">{project.description}</Box>
          </Box>
        </Box>
      ))}
    </Flex>
  );
}

export default Portfolio;
