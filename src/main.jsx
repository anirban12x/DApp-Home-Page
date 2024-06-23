import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-diawlmgp0gmfgjtb.us.auth0.com"
      clientId="xAecgHmbL1QzqippCY67qT2Db0OfiE8m"
      authorizationParams={{
        redirect_uri: "http://localhost:3000/",
      }}
    >
      <Router>
        <App />
      </Router>
    </Auth0Provider>
  </React.StrictMode>
);
