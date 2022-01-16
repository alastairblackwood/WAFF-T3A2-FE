import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as bootstrap from "bootstrap";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51K9cfbA8kBf0PVXQPlrBv6KlvhGsUCNz3RGgUuRpCt7vfiQvZpwEdxyWtRdTeYIRBaM59XiYasr469Ta9ZhioNSw00yIWDTJAa"
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
