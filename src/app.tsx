import { h, Fragment, FunctionComponent } from "preact";
import Logo from "./logo";

const App: FunctionComponent = () => {
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
