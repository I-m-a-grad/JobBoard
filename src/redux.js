import { createStore } from "redux";
createStore(reducer);

// The reducer takes in the state and the action dispatched.
function reducer(state, { type, payload }) {
    switch (type) {
        default:
            return state;
    }
}
