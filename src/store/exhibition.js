import { createAction, handleActions } from 'redux-actions';

const SET_ID = 'exhibition/SET_ID';


export const setID = createAction(SET_ID, id => id);

const initialState = {
    current: -1
};

const exhibition = handleActions(
    {
        [SET_ID]: (state, action) => ({
            current: action.payload
        })
    },
    initialState
);

export default exhibition;