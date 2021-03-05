import React from "react";
import Portfolio from "../Portfolio";
import About from "../About";
import Resume from "../Resume";
import Contact from "../Contact";
import { Box } from "@chakra-ui/react";
import { titleCase } from "../../utils/helper";

function Page({ currentPage }) {
  // switch all pages
  const contentRender = () => {
    switch (currentPage.name) {
      case "portfolio":
        return <Portfolio />;
      case "about me":
        return <About />;
      case "resume":
        return <Resume />;
      case "contact":
        return <Contact />;
      default:
        return <Portfolio />;
    }
  };

  return (
    <Box w="100%" p={6}>
      {contentRender()}
    </Box>
  );
}
export default Page;
