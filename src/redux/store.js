import { createStore, combineReducers} from 'redux';
import reducers from './reducer'
const rootReducer = combineReducers({
  count: reducers,
});
export const store = createStore(rootReducer);


// import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import reducers from './reducer';
// const rootReducer=combineReducers({
//   count:reducers
// });



// export default store = configureStore(rootReducer);