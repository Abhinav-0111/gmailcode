import React from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css";
import App from "./App";
import ContextState from "./utils/ContextState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <ContextState>
            <App />
        </ContextState>
    </>
);
