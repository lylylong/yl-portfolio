import React from "react";
// import PageContent from "../PageContent";
import Portfolio from "../Portfolio";
import About from "../About";

// import Contact from "../Contact";
// import Resume from "../Resume";
import { titleCase } from "../../utils/helper";

function Page({ currentPage }) {
  // switch all pages
  const contentRender = () => {
    switch (currentPage.name) {
      case "portfolio":
        return <Portfolio />;
      case "about me":
        return <About />;

      //   case "resume":
      //     return <Resume />;
      //   case "contact":
      //     return <Contact />;
      default:
        return <Portfolio />;
    }
  };

  return (
    <section>
      <h2 className="mb-3">{titleCase(currentPage.name)}</h2>
      <div>
        <h2>{contentRender()}</h2>
      </div>
    </section>
  );
}
export default Page;
