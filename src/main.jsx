import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import {
  BrowserRouter,
} from "react-router-dom";

import {
  AuthProvider,
} from "./context/AuthContext";

import {
  GoogleOAuthProvider,
} from "@react-oauth/google";


ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <GoogleOAuthProvider
    clientId="703512003009-lagjumjrj8uj33vn43dqocmq9ofvjkfu.apps.googleusercontent.com"
  >

    <BrowserRouter>

      <AuthProvider>

        <App />

      </AuthProvider>

    </BrowserRouter>

  </GoogleOAuthProvider>

);