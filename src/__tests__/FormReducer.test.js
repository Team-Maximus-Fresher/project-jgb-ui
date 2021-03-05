import { FormReducer } from "../reducer/FormReducer";
import { FormAction } from "../actions/FormAction";

it("should add form to SET_FORM", () => {
    // arrange
    const initialState = [
      {
        custID: 840000016,
        productCode: PERSONAL
      },
      {
        custID: 840000017,
        productCode: AUTO
      }
    ];

    const newCustomer = {
        custID: 840000018,
        productCode: PL
    };

    const action = FormAction.setForm(initialState, newCustomer);

    // act
    const newState = courseReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(3);
    expect(newState[0].custID).toEqual("840000016");
    expect(newState[1].custID).toEqual("840000017");
    expect(newState[2].custID).toEqual("840000018");
  });