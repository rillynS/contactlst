import { combineReducers, createStore } from "redux";
import { contactReducer } from "../reducer/contactReducer";
import { userRedcer } from "../reducer/userReducer";
import { contactCurrentUser } from "../reducer/currentUserReducer";


const rootReducer=combineReducers({
    user:userRedcer,
    contacts:contactReducer,
    currentUser:contactCurrentUser
})
export const store = createStore(rootReducer)