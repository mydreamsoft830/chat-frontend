import { combineReducers } from 'redux';
import index from './indexReducer';
import user from './userReducer';
import url from './urlReducer';
import { reducer as form  } from 'redux-form';

const rootReducer = combineReducers({
    index,
    user,
    url,
    form
});

export default rootReducer;
