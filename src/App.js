import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Page from "./components/Page";

function App() {
  // initial page title name
  document.title = "Yin Long Portfolio";
  // all page options
  const [pages] = useState([
    { name: "about me" },
    { name: "portfolio" },
    { name: "resume" },
    { name: "contact" },
  ]);
  // set the initial page -- About me
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="App">
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
    </div>
  );
}

export default App;
