import store from '../store'

export const setForm = (name , value) => async dispatch => {
    try {
        console.log("Set Form Started")
        console.log(name , value)
        dispatch(
        {
            type: "SET_FORM",
            name: name,
            value : value
        })
        console.log(store.getState())
    } catch (error) {
        console.log(error);
    }

}