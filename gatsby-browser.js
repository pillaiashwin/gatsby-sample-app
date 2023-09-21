import React from "react";
import "regenerator-runtime/runtime";
// import { navigate } from "gatsby";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import { createBrowserHistory } from "history";

import Helmet from "react-helmet";

// bootstrap imports skipped

// Replaces default renderer with the Redux Provider wrapper for state management
let forcedTransition = false;

export const wrapRootElement = ({ element }) => {
  const store = createStore();
  const history = typeof window !== "undefined" ? createBrowserHistory() : null;

  return (
    <Provider store={store}>
      <Router location={history.location} history={history}>
          <Helmet>
            <link rel="icon" href={favicon} type="image/x-icon" />
            <link rel="shortcut icon" href={favicon} type="image/x-icon" />
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Helmet>
          <div className="site">
            <div className="site-content lsgray">{element}</div>
          </div>
      </Router>
    </Provider>
  );
};

export default createBrowserHistory();
