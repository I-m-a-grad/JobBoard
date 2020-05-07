import React from "react";
import { expect } from "chai";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { spy } from "sinon";

import copy from "../src/testTesting";

describe("Funcion", () => {
    ///// Adoption Agency /////

    describe("copy", () => {
        //
        // has state
        //

        it("returns it's arguments", () => {
            const result = copy("Hello");
            // ShallowWrapper.state() gives us the current `this.state` of the component
            expect(result).to.equal("Hello");
        });
    }); // end <AdoptionForm /> component
}); // end React specs
