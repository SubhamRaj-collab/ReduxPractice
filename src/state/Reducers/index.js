import { combineReducers } from "redux";
import ticketReducer from './ticketReducer'

const reducers = combineReducers({
    ticket: ticketReducer
})

export default reducers
