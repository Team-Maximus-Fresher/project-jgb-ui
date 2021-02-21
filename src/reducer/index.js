import { combineReducers } from 'redux'
import formReducer from './FormReducer'


export default combineReducers(
    {
        form: formReducer
    }
)