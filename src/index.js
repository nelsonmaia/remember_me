import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";
import { getConfig } from "./config";
import Callback from "./Callback"



const onRedirectCallback = async (appState) => {

    //Callback(appState);

  //  history.push(
  //    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  //  );

  history.push("/external-api");
};

// Please see https://auth0.github.io/auth0-react/interfaces/auth0_provider.auth0provideroptions.html
// for a full list of the available properties on the provider
const config = getConfig();

const rememberMe = localStorage.getItem("rememberMe");

let cacheLocation = "memory";
let useRefreshTokens = false;

if (rememberMe === 'true') {
  cacheLocation = "localstorage";
  useRefreshTokens = true;
}

console.log("remembberMe", rememberMe);


const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: window.location.origin,
  useRefreshTokens: useRefreshTokens,
  cacheLocation: cacheLocation,

  onRedirectCallback
};

console.log(providerConfig);

ReactDOM.render(
  <Auth0Provider {...providerConfig}>
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
