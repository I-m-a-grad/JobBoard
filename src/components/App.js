import React from "react";
import Provider from "react-redux";
import { store } from "../redux";

function App() {
    return (
        <Provider store={store}>
            <h1>Job Board</h1>
        </Provider>
    );
}

export default App;
