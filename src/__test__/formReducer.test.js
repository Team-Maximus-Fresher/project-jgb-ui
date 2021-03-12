import formReducer from "../reducer/FormReducer";

describe("Reducer Test", () => {
    it("should add form to SET_FORM", () => {
        const action = {
            type: "SET_FORM",
            name: "custID",
            value: "840000018",
        };

        const newState = formReducer([], action);
        expect(newState.custID).toEqual("840000018");
    });
});