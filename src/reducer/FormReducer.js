const initialState = { 
    /* fullName : null ,
    email : null,
    phone : null */
}

const formReducer = (state = initialState, action) => {

    switch (action.type) {
        case "SET_FORM":
            return {
                ...state,
                [action.name] : action.value
            }
        
        default:
            return state;
    }

}
export default formReducer;