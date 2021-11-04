import React from "react";
import App from "./App";
import Provider from "./context/provider"

export default () => {
    return (
        <Provider>
            <App />
        </Provider>
    )
}