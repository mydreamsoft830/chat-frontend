import axios from 'axios';
import * as constants from '../constants'

axios.defaults.timeout = 20000;

export function UrlFetch(url) {
  //return axios.get(constants.ApiUrl+url);
  return axios.post(constants.BaseUrl+'url/fetch',{url : url});
}
export function UrlSave(values) {
  return axios.post(constants.BaseUrl+'url/save',{values});
}
export function UrlLoad(searchstr) {  
  return axios.post(constants.BaseUrl+'url/load',{ searchstr : searchstr });
}
export function UrlBell(urlid) {
  return axios.post(constants.BaseUrl+'url/bell',{ urlid : urlid });
}
export function UrlRemove(urlid) {
  return axios.post(constants.BaseUrl+'url/remove',{ urlid : urlid });
}
export function UrlUpdate(urlid,desired_price) {
  return axios.post(constants.BaseUrl+'url/update',{ urlid : urlid , desired_price : desired_price });
}






  