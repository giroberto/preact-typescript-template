import React, { Fragment } from "react";
import Logo from "./logo";

const App: React.FC = () => {
  return (
    <Fragment>
      <Logo />
      <p>Hello Vite + Preact!</p>
      <p>
        <a
          className="link"
          href="https://preactjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Preact
        </a>
      </p>
    </Fragment>
  );
};

export default App;
