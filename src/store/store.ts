
import { createStore } from "redux";

import { contactReducer } from "./contact/contact.Reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(contactReducer, composeWithDevTools());

export default store




