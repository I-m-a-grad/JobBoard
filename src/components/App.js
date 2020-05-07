import React from "react";

function App() {
    return (
        <>
            <h1>Job Board</h1>
        </>
    );
}

const person = {
    name: "Moshe",
    age: 26,
    // skills: {
    //     react: "blah",
    // },
};

console.log(
    person.name +
        " is " +
        person.age +
        " and has the following skills " +
        person.skills?.react
);

let age = 0;
console.log(age ?? "no age given");
console.log(5n + 3n);

export default App;
