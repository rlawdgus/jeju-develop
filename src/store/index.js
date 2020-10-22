import { combineReducers } from "redux";

import dialog from './dialog';
import loading from './loading';
import modal from './modal';
import language from './language';

const rootReducer = combineReducers({
    loading,
    dialog,
    modal,
    language
});

export default rootReducer;
