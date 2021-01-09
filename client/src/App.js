import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useAlan from "./hooks/useAlan";
import "./app.css";
import Navbar from "./components/layout/Navbar";
import HomePage from "./components/layout/HomePage";
import Login from "./components/auth/Login";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  useAlan();
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Fragment>
          <Route exact path='/' component={HomePage}></Route>
        </Fragment>
        <section className='container'>
          <Switch>
            <Route path='/login' component={Login}></Route>
          </Switch>
        </section>
      </Router>
    </Provider>
  );
}

export default App;
