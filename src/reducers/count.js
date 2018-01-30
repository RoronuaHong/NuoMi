import * as calculateCount from "../constants/count";

const initialState = 0;

export default function count(state = initialState, action) {
    switch(action.type) {
        case calculateCount.ADDCOUNT:
            return state + 1;
        case calculateCount.DELCOUNT:
            return state - 1;
        default:
            return state;
    }
}