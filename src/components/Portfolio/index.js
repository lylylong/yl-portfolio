import React, { useState } from "react";
import { titleCaseRemoveHyphen } from "../../utils/helper";
import { Center, SimpleGrid, Box, Image, Link, Badge } from "@chakra-ui/react";

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
    <SimpleGrid minChildWidth="320px" spacingX="40px" spacingY="20px">
      {projects.map((project, i) => (
        <Center key={"project" + i}>
          <Box
            maxW="lg"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            mt="2"
          >
            <Link href={project.link} target="_blank">
              <Image
                src={
                  require(`../../assets/projects/${project.name}.jpg`).default
                }
                alt={project.name + " app"}
                className="project-image"
              />
            </Link>
            <Box p="5" pt="3">
              <Box mt="1" fontWeight="bold" as="h2" mb="3" isTruncated>
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
                    <Badge
                      borderRadius="full"
                      px="2"
                      colorScheme="teal"
                      className="link-to-url"
                    >
                      Deployed URL
                    </Badge>
                  </Link>
                  <Link
                    color="pink.500"
                    href={project.repo}
                    target="_blank"
                    ml="2"
                  >
                    <Badge
                      borderRadius="full"
                      px="2"
                      colorScheme="pink"
                      className="link-to-gh"
                    >
                      GitHub Link
                    </Badge>
                  </Link>
                </Box>
              </Box>

              <Box mt="1" color="gray.600">
                {project.description}
              </Box>
            </Box>
          </Box>
        </Center>
      ))}
    </SimpleGrid>
  );
}

export default Portfolio;
