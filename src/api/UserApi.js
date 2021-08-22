import axios from 'axios';
import * as constants from '../constants'
import {NotificationManager} from 'react-notifications';

axios.defaults.timeout = 20000;

export function Register(values) {
  return axios.post(constants.BaseUrl+'user/register',{values}).catch(err=> {
    NotificationManager.error('We’re sorry, something’s gone wrong. Please try again later.',
    '',8000);
  });
}

export function Login(values) {
  return axios.post(constants.BaseUrl+'user/login',{values}).catch(err=> {
    NotificationManager.error('We’re sorry, something’s gone wrong. Please try again later.',
    '',8000);
  });
}

export function SendSubScribe(values) {
  return axios.post(constants.BaseUrl+'user/subscribe',{values}).catch(err=> {
    NotificationManager.error('We’re sorry, something’s gone wrong. Please try again later.',
    '',8000);
  });
}

