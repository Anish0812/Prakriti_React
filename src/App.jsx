
import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import React from "react";
import {
        BrowserRouter as Router,
        Routes,
        Route,
        Link,
      } from "react-router-dom";
import Home from './containers/Home'
import Signup from './containers/Signup'
import Login from './containers/Login'
import Activate from './containers/Activate'
import ResetPasswordConfirm from "./containers/ResetPasswordConfirm";
import ResetPassword from "./containers/ResetPassword";
import Layout from "./hocs/Layout";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forget-password" component={ResetPassword} />
        <Route path="/activate-account/:uid/:token" component={Activate} />
        <Route path="/reset-password-confirm/:uid/:token" component={ResetPasswordConfirm} />
      </Switch>
    </Router>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default App;
