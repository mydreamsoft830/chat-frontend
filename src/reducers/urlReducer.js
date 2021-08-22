//import {FORMAT_USERINFO_TYPE} from "../actionTypes/index";
import {SUCCESS_SAVEURL_TYPE} from "../actionTypes/index";
import {SUCCESS_LOADURL_TYPE} from "../actionTypes/index";

//import * as datas from '../utils/DataUtil'

const initialState = {
    saveUrlSuccess : false,
    userUrls : null
};


export default function urlReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case SUCCESS_SAVEURL_TYPE:
                newState = {...state};
                newState.saveUrlSuccess = action.val;                
            return newState;
        case SUCCESS_LOADURL_TYPE:
                newState = {...state};
                newState.userUrls = action.val;
            return newState;

        default: return state;
    }
}

