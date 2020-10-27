import { combineReducers } from "redux";

import dialog from './dialog';
import loading from './loading';
import language from './language';

const rootReducer = combineReducers({
    loading,
    dialog,
    language
});

export default rootReducer;
