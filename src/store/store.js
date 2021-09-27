import { createStore } from 'redux';
import {ACTION_1} from "./actions/action1";
import {ACTION_2} from "./actions/action2";

function reducer(state, action) {
    switch(action.type) {
        case ACTION_1: return { value: action.value_1 };
        case ACTION_2: return { value: action.value_2 };

        default: return state;
    }
}

const store = createStore(reducer);

export default store;