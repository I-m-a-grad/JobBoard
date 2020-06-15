import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import axios from "./axios-config";
// The reducer takes in the state and the action dispatched.
// console.log(axios);

const test = async () => {
    try {
        const data = await axios.get("api");
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
};

console.log(test());

const reducer = (state = { jobSeekers: [] }, { type, payload }) => {
    switch (type) {
        default:
            return state;
    }
};
const logger = createLogger({
    predicate: (getState, action) => {
        // Use the next line to disable specific actions from being logged.
        // return ![ACTION_TYPE_ONE, ACTION_TYPE_TWO, ...].includes(action.type);
        // Return false if you don't want to log anything.
        return true;
    },
});

export default createStore(reducer, applyMiddleware(logger));
