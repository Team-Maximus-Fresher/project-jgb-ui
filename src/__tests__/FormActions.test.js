import { FormActions } from "../actions/FormAction";

describe("setForm", () => {
    it("should set SET_FORM action", () => {
      //arrange
      const customer = customer[0];
      const expectedAction = {
        type: SET_FORM,
        name: custID,
        value : 84000016
      };

      //act
      const action = FormActions.SET_FORM(customer);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });