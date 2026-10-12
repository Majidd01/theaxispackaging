import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { store } from "@/lib/store";
import { createSharedHistory } from "@/lib/shared-history";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import "@/app/globals.css";
import App from "./App";

const history = createSharedHistory();

const headerRoot = document.getElementById("header-root");
const appRoot = document.getElementById("app-root");

if (!headerRoot || !appRoot) {
  throw new Error("Homepage shell is missing header-root or app-root");
}

ReactDOM.createRoot(headerRoot).render(
  <React.StrictMode>
    <HistoryRouter history={history}>
      <Header />
    </HistoryRouter>
  </React.StrictMode>
);

ReactDOM.createRoot(appRoot).render(
  <React.StrictMode>
    <HistoryRouter history={history}>
      <Provider store={store}>
        <HelmetProvider>
          <App />
          <Toaster />
        </HelmetProvider>
      </Provider>
    </HistoryRouter>
  </React.StrictMode>
);
