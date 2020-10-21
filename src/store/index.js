import { combineReducers } from "redux";

import dialog from './dialog';
import loading from './loading';
import modal from './modal';

const rootReducer = combineReducers({
    loading,
    dialog,
    modal
});

export default rootReducer;
