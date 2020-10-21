import { combineReducers } from "redux";

import dialog from './dialog';
import loading from './loading';

const rootReducer = combineReducers({
    loading,
    dialog,
});

export default rootReducer;
