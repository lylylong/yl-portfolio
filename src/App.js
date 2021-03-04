import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";

// import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

import Nav from "./components/Nav";
import Page from "./components/Page";

function App() {
  // initial page title name
  document.title = "Yin Long Portfolio";
  // all page options
  const [pages] = useState([
    { name: "portfolio" },
    { name: "about me" },
    { name: "resume" },
    { name: "contact" },
  ]);
  // set the initial page -- this list shows which one goes first
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <ChakraProvider>
      <Nav
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Nav>

      <Page currentPage={currentPage}></Page>
    </ChakraProvider>
  );
}

export default App;
