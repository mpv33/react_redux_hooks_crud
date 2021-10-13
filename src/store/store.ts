
// import { createStore } from "redux";

// import { contactReducer } from "./contact/contact.Reducer";
// import tutorialReducer from './tutorial/tutorial.Reducer'
// import { composeWithDevTools } from "redux-devtools-extension";

// const store = createStore(
//     contactReducer,
//     tutorialReducer,
//      composeWithDevTools());

// export default store





 import { contactReducer } from "./contact/contact.Reducer";
 import { adminReducer } from "./admin/contact.Reducer";
 import tutorialReducer from './tutorial/tutorial.Reducer'
import { devToolsEnhancer } from 'redux-devtools-extension'
import {
  applyMiddleware,
  createStore,
  combineReducers,
  compose,
  StoreEnhancer,
} from 'redux';
import thunk from 'redux-thunk';


const appReducer = combineReducers({

  tutorials:tutorialReducer,
contactReducer,
adminReducer
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

const storeEnhancers: StoreEnhancer = compose(
  applyMiddleware(thunk),
  devToolsEnhancer({}),
);

const store = createStore(rootReducer, storeEnhancers);

export default store;

