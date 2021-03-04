import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as formActions from "../actions/FormAction";

it("Should handle creating form", function() {
  // arrange
  const store = createStore(rootReducer, initialState);
  const customer = {
  custID: 84000016
  };

  // act
  const action = formActions.setForm(customer);
  store.dispatch(action);

  // assert
  const customerEnquire = store.getState().customer[0];
  expect(customerEnquire).toEqual(customer);
});
