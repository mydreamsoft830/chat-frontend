import * as types from '../actionTypes';
import axios from 'axios';
import * as datas from '../utils/DataUtil';
import * as constants from '../constants';
import {NotificationManager} from 'react-notifications';

import * as api from '../api/UserApi'

export function RegisterAction(values, dispatch, props) {
    if(values.password === values.password2) 
        (async () => {
            var res = await api.Register(values);
            var userinfo = res.data;
            if(userinfo.success) {
                NotificationManager.success('Done! Your account has been created. Please check your e-mail and confirm',
                    '',8000);
                dispatch({
                    type: types.ERROR_1_TYPE,
                    val: false
                });
                props.history.push('/index');
            }else{
                NotificationManager.error(userinfo.error,
                    '',8000);
            }
        })();
    else{
        dispatch({
            type: types.ERROR_1_TYPE,
            val : true,
        });
    }   
}
export function LoginFormShowAction() {
    return function (dispatch) {
        dispatch({
            type: types.LOGIN_FORM_SHOW_TYPE,
            val: true
        });
        
    };
}
export function LoginFormHideAction() {
    return function (dispatch) {
        dispatch({
            type: types.LOGIN_FORM_HIDE_TYPE,
            val: false
        });        
    };
}
export function LoginAction(values, dispatch, props) {     
    (async () => {
        var res = await api.Login(values);
        var userinfo = res.data;
        if(userinfo.success) {
            await datas.save('user',userinfo.user);
            await datas.save('token',userinfo.token);
            await dispatch({
                type: types.SAVE_USERINFO_TYPE,
                val : userinfo.user,
            });
            await dispatch({
                type: types.SAVE_USERTOKEN_TYPE,
                val : userinfo.token,
            });            
            props.history.push('/page/dashboard');
        }else{
            NotificationManager.error(userinfo.error,
                '',8000);
        }
    })();
}
export function ForgotAction(values, dispatch, props) {     
    if(true) 
        axios.post(constants.BaseUrl+'user/forgot',{values})
            .then(res => {
                let userinfo = res.data;
                if(userinfo.success === true) {
                    NotificationManager.success(userinfo.message,
                        '',8000);
                    props.resetFormView();
                }else{
                    NotificationManager.error(userinfo.error,
                        '',8000);
                }
            },err => {
            }
        ).catch(err=> {
        }); 
    else{
    } 
}
export function ResetAction(values, dispatch, props) {   
    if(true) 
        axios.post(constants.BaseUrl+'user/reset',{values})
            .then(res => {
                let userinfo = res.data;
                if(userinfo.success === true) {
                    NotificationManager.success(userinfo.message,
                        '',8000);
                    props.resetFormView();
                }else{
                    NotificationManager.error(userinfo.error,
                        '',8000);
                }
            },err => {
            }
        ).catch(err=> {
        }); 
    else{
    } 
}

export function ContactAction(values, dispatch, props) {   
    if(true) 
        axios.post(constants.BaseUrl+'user/reset',{values})
            .then(res => {
                let userinfo = res.data;
                if(userinfo.success === true) {
                    NotificationManager.success(userinfo.message,
                        '',8000);
                    props.resetFormView();
                }else{
                    NotificationManager.error(userinfo.error,
                        '',8000);
                }
            },err => {
            }
        ).catch(err=> {
        }); 
    else{
    } 
}
