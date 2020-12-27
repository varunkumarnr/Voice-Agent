import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useAlan from "./hooks/useAlan";
function App() {
  useAlan();
  return (
    <Router>
      <Fragment>
        <h1>xyz</h1>
      </Fragment>
    </Router>
  );
}

export default App;
